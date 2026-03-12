import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminBookingHistory() {
  let [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  
  async function FetchProfile() {
    try {
      let response = await api.get("/user/profile");
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
      alert("You can't be access this page");
    }
  }
  console.log(user);

  const [formData, setFormData] = useState({
    user_id: "",
    heritage_id: "",
    Date: "",
    reason: "",
    status: "PENDING",
  });

  async function fetchBookings() {
    try {
      let res = await api.get("/admin/book");
      setBookings(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleEdit(item) {
    setShowForm(true);
    setEditId(item._id);
    setFormData({
      user_id: item.user_id,
      heritage_id: item.heritage_id,
      Date: item.Date?.split("T")[0],
      reason: item.reason,
      status: item.status,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/user/book/edit/${editId}`, formData);
      alert("Booking Updated Successfully");
      setShowForm(false);
      fetchBookings();
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await api.delete(`/user/book/remove/${id}`);
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">
          {!showForm ? (
            <>
              <div className="page-header">
                <h2>Booking History</h2>
              </div>

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Heritage Site</th>
                    <th>Date</th>
                    <th>Ticket Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.length > 0 ? (
                    bookings.map((item) => (
                      <tr key={item._id}>
                        <td>{item.user_name}</td>
                        <td>{item.heritage_name}</td>
                        <td>{new Date(item.Date).toLocaleDateString()}</td>
                        <td>₹ {item.heritage_price}</td>
                        <td>{item.status}</td>
                        
                        <td>
                          {/* <button
                            className="btn-action btn-reply"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button> */}
                          <button
                            className="btn-action btn-delete"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" align="center">
                        No bookings found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <div className="page-header">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Back
                </button>

                <button className="btn btn-primary" onClick={handleSubmit}>
                  Update Booking
                </button>
              </div>

              <form onSubmit={handleSubmit} className="form-card">
                <input
                  type="text"
                  name="user_id"
                  placeholder="User ID"
                  value={formData.user_id}
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  type="text"
                  name="heritage_id"
                  placeholder="Heritage ID"
                  value={formData.heritage_id}
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  type="date"
                  name="Date"
                  value={formData.Date}
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  type="text"
                  name="reason"
                  placeholder="Purpose"
                  value={formData.reason}
                  onChange={handleChange}
                  className="form-control"
                />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminBookingHistory;
