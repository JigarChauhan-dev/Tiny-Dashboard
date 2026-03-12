import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminUserSubscription() {
  const [subs, setSubs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const defaultForm = {
    user_id: "",
    plan_id: "",
    end_date: "",
    status: "ACTIVE",
  };

  const [formData, setFormData] = useState(defaultForm);

  const fetchSubs = async () => {
    const res = await api.get("/user-subscriptions/all");
    setSubs(res.data.data || []);
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openAddForm = () => {
    setEditId(null);
    setFormData(defaultForm);
    setShowForm(true);
  };

  const handleEdit = (sub) => {
    setEditId(sub._id);
    setFormData({
      user_id: sub.user_id,
      plan_id: sub.plan_id,
      end_date: sub.end_date?.split("T")[0],
      status: sub.status,
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_id || !formData.plan_id || !formData.end_date) {
      return alert("All fields required");
    }

    if (editId) {
      await api.put(`/user-subscriptions/edit/${editId}`, formData);
      alert("Subscription Updated");
    } else {
      await api.post("/user-subscriptions/subscribe", formData);
      alert("Subscription Assigned");
    }

    setShowForm(false);
    fetchSubs();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Revoke subscription?")) return;
    await api.delete(`/user-subscriptions/remove/${id}`);
    fetchSubs();
  };

  const filteredSubs = subs.filter((s) =>
    (s.user_id || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">

          {!showForm ? (
            <>
              <input
                className="search-input"
                placeholder="Search by User ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Plan ID</th>
                    <th>Expiry</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubs.map((sub) => (
                    <tr key={sub._id}>
                      <td style={{ fontSize: "11px" }}>{sub.user_id}</td>
                      <td style={{ fontSize: "11px" }}>{sub.plan_id}</td>
                      <td>{new Date(sub.end_date).toLocaleDateString()}</td>
                      <td>{sub.status}</td>
                      <td>
                        <button onClick={() => handleEdit(sub)}>Edit</button>
                        <button onClick={() => handleDelete(sub._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button onClick={openAddForm}>Assign Plan</button>
            </>
          ) : (
            <>
              <button onClick={() => setShowForm(false)}>Back</button>
              <h2>{editId ? "Edit Subscription" : "Assign Subscription"}</h2>

              <form onSubmit={handleSubmit} className="form-row">
                <input
                  name="user_id"
                  placeholder="User ObjectID"
                  value={formData.user_id}
                  onChange={handleChange}
                />

                <input
                  name="plan_id"
                  placeholder="Plan ObjectID"
                  value={formData.plan_id}
                  onChange={handleChange}
                />

                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="EXPIRED">EXPIRED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>

                <button type="submit">Save</button>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminUserSubscription;