import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function AdminManageFeedback() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchFeedbacks() {
    try {
      const response = await api.get("/feedbacks/all");
      return response.data.data || [];
    } catch (error) {
      console.log("Fetch Error:", error);
      throw error;
    }
  }

  const {
    data: feedbacks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: fetchFeedbacks,
  });

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/feedbacks/remove/${id}`);

      if (response.data.status) {
        toast.success("Feedback deleted successfully");

        queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
      }
    } catch (err) {
      console.log(err);
      toast.error("Error deleting feedback");
    }
  };
  const filteredData = feedbacks.filter(
    (f) =>
      (f.username || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (f.message || "").toLowerCase().includes(searchTerm.toLowerCase()),
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
              {isLoading ? (
                <tr>
                  <td colSpan="5" align="center">
                    Loading...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="5" align="center" style={{ color: "red" }}>
                    Error: {error.message}
                  </td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((f) => (
                  <tr key={f._id}>
                    <td>{f.username || "Guest"}</td>
                    <td>
                      {f.createdAt
                        ? new Date(f.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td style={{ color: "#f39c12" }}>
                      {"★".repeat(f.rating || 0)}
                      {"☆".repeat(5 - (f.rating || 0))}
                    </td>
                    <td>{f.message}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item._id)}
                        disabled={deletingId === item._id}
                      >
                        {deletingId === item._id ? "Deleting..." : "Delete"}
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
    </div>
  );
}

export default AdminManageFeedback;
