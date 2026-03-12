import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageBooking() {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);


  async function fetchBookings() {
    try {
      let res = await api.get("/admin/book");
      console.log(res.data);
      
      setBookings(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      let response = await api.put(`/admin/book/status/${id}`, {
        status: status,
      });

      alert("Status updated successfully");
      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Failed to update status");
    }
  };

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
          
            <>
              <div className="page-header">
                <h2>Booking Management</h2>
              </div>

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Heritage Site</th>
                    <th>Date</th>
                    <th>Reason</th>
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
                        <td>{item.reason}</td>
                        <td>₹ {item.heritage_price}</td>
                        <td>
                        <select
                          className={`form-select`}
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(item._id, e.target.value)
                          }
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        </td>
                        <td>
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
          
          
        </div>
      </div>
    </div>
  );
}

export default AdminManageBooking;
