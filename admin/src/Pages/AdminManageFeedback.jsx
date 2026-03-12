import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageFeedback() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  async function FetchData() {
    try {
      setLoading(true);
      let response = await api.get("/feedbacks/all");
      setData(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this feedback?")) return;

    try {
      const response = await api.delete(`/feedbacks/remove/${id}`);
      if (response.data.status) {
        setData((prev) => prev.filter((f) => f._id !== id));
        triggerToast("Feedback deleted successfully");
      }
    } catch (err) {
      console.log(err);
      alert("Error deleting feedback");
    }
  };

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const filteredData = data.filter(
    (f) =>
      (f.username || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (f.message || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">

          {/* HEADER */}
          <div className="page-header">
            <h2>User Feedback</h2>
{/* 
            <input
              type="text"
              placeholder="Search feedback..."
              className="form-control"
              style={{ maxWidth: "250px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
          </div>

          {/* TABLE */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" align="center">
                    Loading...
                  </td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((f) => (
                  <tr key={f._id}>
                    <td>{f.username || "Guest"}</td>
                    <td>{f.createdAt}</td>
                    <td style={{ color: "#f39c12" }}>
                      {"★".repeat(f.rating || 0)}
                      {"☆".repeat(5 - (f.rating || 0))}
                    </td>
                    <td>{f.message}</td>
                    <td>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => handleDelete(f._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" align="center">
                    No feedback found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showToast && <div className="toast-notification">{toastMsg}</div>}
    </div>
  );
}

export default AdminManageFeedback;