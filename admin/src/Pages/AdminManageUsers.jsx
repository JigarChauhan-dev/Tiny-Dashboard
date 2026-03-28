import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function AdminManageUsers() {
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");

  // ===== FETCH USERS =====
  async function fetchUsers() {
    try {
      const res = await api.get("/admin/manage-users/all");
      return res.data.data || [];
    } catch (err) {
      console.log("Fetch Users Error:", err);
      throw err; 
    }
  }

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // ===== DELETE USER =====
  const deleteUser = async (id) => {
    if (window.confirm("Delete user?")) {
      await api.delete(`/admin/manage-users/remove/${id}`);
      toast.success("User deleted successfully");
      setUsers(users.filter((u) => u._id !== id));
    }
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />
        <div className="admin-body fade-in">
          {/* ================= LIST ================= */}
          {view === "list" && (
            <>
              <div className="page-header">
                <h2>User Management</h2>
              </div>

              <input
                type="text"
                placeholder="Search username..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "20px" }}
              />

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
  {isLoading ? (
    <tr>
      <td colSpan="5" className="text-center">Loading...</td>
    </tr>
  ) : isError ? (
    <tr>
      <td colSpan="5" style={{ color: "red" }}>
        ❌ Failed to load users
      </td>
    </tr>
  ) : users.length > 0 ? (
    users
      .filter((u) =>
        (u.username || "")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((u) => (
        <tr key={u._id}>
          <td>{u.username}</td>
          <td>{u.email}</td>
          <td>{u.role}</td>
          <td>{u.phone || "N/A"}</td>
          <td>
            <button
              className="delete-btn"
              onClick={() => deleteUser(u._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))
  ) : (
    <tr>
      <td colSpan="5">No users found</td>
    </tr>
  )}
</tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminManageUsers;
