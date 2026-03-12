import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageInquiries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  async function FetchData() {
    try {
      setLoading(true);
      let response = await api.get("/admin/inquiries/all");
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
    if (!window.confirm("Delete this inquiry?")) return;

    try {
      const response = await api.delete(`/admin/inquiries/remove/${id}`);
      if (response.data.status) {
        setData((prev) => prev.filter((item) => item._id !== id));
        triggerToast("Inquiry deleted successfully");
      }
    } catch (err) {
      console.log(err);
      alert("Error deleting inquiry");
    }
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

        <div className="admin-body">

          {/* HEADER */}
          <div className="page-header">
            <h2>Manage Inquiries</h2>
          </div>

          {/* TABLE */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" align="center">
                    Loading...
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                    <td>{item.created_at.split("T")[0]}</td>
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
                  <td colSpan="6" align="center">
                    No inquiries found
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

export default AdminManageInquiries;