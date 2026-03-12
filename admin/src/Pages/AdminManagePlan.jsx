import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManagePlan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list");
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const navigate = useNavigate();

  const defaultForm = {
    _id: null,
    plan_name: "",
    price: "",
    duration_days: "",
    description: "", // Changed from 'features'
    status: "ACTIVE",
  };
  const [formData, setFormData] = useState(defaultForm);

  // --- FETCHING LOGIC (SKELETON REMOVED) ---
  async function FetchData() {
    try {
      // API call using standardized Axios config
      let response = await api.get("/plans/all");
      setData(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching plans:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  // --- CRUD HANDLERS ---
  const handleSave = async () => {
    // Destructure using 'description' to match backend
    const { plan_name, price, duration_days, description, status } = formData;

    // 1. Frontend Validation
    if (!plan_name || !price || !duration_days || !description || !status) {
      return alert(
        "Required fields missing: Plan Name, Price, Duration, Description, and Status.",
      );
    }

    setIsSaving(true);
    try {
    if (formData._id) {
      // Update existing
      const response = await api.put(`/plans/edit/${formData._id}`, payload);
      console.log("Update Response:", response.data);
      finalizeSave("Plan Updated Successfully!");
    } else {
      // Add new
      await api.post("/plans/add", payload);
      finalizeSave("New Subscription Plan Created!");
    }
  } catch (err) {
    setIsSaving(false);
    console.error("Save Error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Server Error: Could not save.");
  }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      try {
        await api.delete(`/plans/remove/${id}`);
        setData(data.filter((p) => p._id !== id));
        triggerToast("Plan Deleted");
      } catch (err) {
        console.log("Delete error:", err);
      }
    }
  };

  const finalizeSave = (msg) => {
    setIsSaving(false);
    triggerToast(msg);
    FetchData();
    setTimeout(() => setView("list"), 1500);
  };

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />
        <div className="admin-body fade-in">
          {view === "list" ? (
            <>
              <div className="page-header">
                <div className="page-title">
                  <h2>
                    <i className="fa fa-credit-card"></i> Manage Plans
                  </h2>
                  <p>Monitoring {data.length} subscription tiers.</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setFormData(defaultForm);
                    setView("form");
                  }}
                >
                  <i className="fa fa-plus"></i> Add Plan
                </button>
              </div>

              <div className="filter-bar">
                <div className="search-wrapper">
                  <i className="fa fa-search search-icon"></i>
                  <input
                    type="text"
                    placeholder="Search plans..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Plan Name</th>
                      <th>Price</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* UPDATED: Simple text loading instead of CardSkeleton */}
                    {loading ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center"
                          style={{ padding: "50px" }}
                        >
                          <i className="fa fa-spinner fa-spin"></i> Loading
                          subscription data...
                        </td>
                      </tr>
                    ) : data.length > 0 ? (
                      data
                        .filter((p) =>
                          (p.plan_name || "")
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                        )
                        .map((plan) => (
                          <tr key={plan._id} className="table-row">
                            <td className="prop-name">
                              <strong>{plan.plan_name}</strong>
                            </td>
                            <td>₹ {plan.price}</td>
                            <td>{plan.duration_days} Days</td>
                            <td>
                              <span
                                className={`status-badge status-${plan.status.toLowerCase()}`}
                              >
                                {plan.status}
                              </span>
                            </td>
                            <td
                              className="actions-cell"
                              style={{ textAlign: "right" }}
                            >
                              <button
                                className="btn-action btn-reply"
                                onClick={() => {
                                  setFormData(plan);
                                  setView("form");
                                }}
                              >
                                <i className="fa fa-pencil"></i>
                              </button>
                              <button
                                className="btn-action btn-delete"
                                onClick={() => handleDelete(plan._id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center"
                          style={{ padding: "30px", color: "#999" }}
                        >
                          No subscription plans found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            /* FORM VIEW (Add/Edit) */
            <div className="fade-in">
              <div className="page-header">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <button
                    onClick={() => setView("list")}
                    className="btn btn-secondary"
                  >
                    <i className="fa fa-arrow-left"></i> Back
                  </button>
                  <h1>
                    {formData._id
                      ? "Edit Subscription Plan"
                      : "Create New Plan"}
                  </h1>
                </div>
                <button
                  onClick={handleSave}
                  className="btn btn-primary"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    "Saving..."
                  ) : (
                    <>
                      <i className="fa fa-save"></i> Save Plan
                    </>
                  )}
                </button>
              </div>

              <div
                className="edit-layout-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {/* Column 1: Pricing & Identity */}
                <div className="form-card shadow-sm">
                  <h3>
                    <i className="fa fa-tag"></i> General Info
                  </h3>
                  <div className="form-group">
                    <label>Plan Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.plan_name}
                      onChange={(e) =>
                        setFormData({ ...formData, plan_name: e.target.value })
                      }
                      placeholder="e.g. Premium Heritage Pass"
                    />
                  </div>
                  <div className="form-group">
                    <label>Price (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      placeholder="500"
                    />
                  </div>
                </div>

                {/* Column 2: Benefits & Timing */}
                <div className="form-card shadow-sm">
                  <h3>
                    <i className="fa fa-list-check"></i> Configuration &
                    Features
                  </h3>
                  <div className="form-group">
                    <label>Duration (Days)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.duration_days}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          duration_days: e.target.value,
                        })
                      }
                      placeholder="30"
                    />
                  </div>
                  <div className="form-group">
                    <label>Plan Description / Features</label>
                    <textarea
                      rows="4"
                      className="form-control"
                      value={formData.description} // Bound to description
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: plan.description || plan.features,
                        })
                      }
                      placeholder="e.g. Virtual Tours, Audio Guides, 10% Discount"
                    />
                  </div>

                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="form-control"
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showToast && <div className="toast-notification">{toastMsg}</div>}
    </div>
  );
}

export default AdminManagePlan;
