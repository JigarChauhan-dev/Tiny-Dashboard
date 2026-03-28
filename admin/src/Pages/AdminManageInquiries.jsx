import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function AdminManageInquiries() {
  async function fetchInquiries() {
    try {
      const response = await api.get("/admin/inquiries/all");
      return response.data.data || [];
    } catch (error) {
      console.log("Fetch Error:", error);
      throw error;
    }
  }

  const {
    data: inquiries = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["inquiries"],
    queryFn: fetchInquiries,
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;

    try {
      const response = await api.delete(`/admin/inquiries/remove/${id}`);
      if (response.data.status) {
        setData((prev) => prev.filter((item) => item._id !== id));
        toast.success("Inquiry deleted successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error deleting inquiry");
    }
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
              {isLoading ? (
                <tr>
                  <td colSpan="6" align="center">
                    Loading...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="6" align="center" style={{ color: "red" }}>
                    ❌ Failed to load inquiries
                  </td>
                </tr>
              ) : inquiries.length > 0 ? (
                inquiries.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                    <td>{item.created_at?.split("T")[0]}</td>
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
    </div>
  );
}

export default AdminManageInquiries;
