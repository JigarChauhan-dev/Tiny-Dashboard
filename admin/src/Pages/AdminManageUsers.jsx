import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");


  // ===== FETCH USERS =====
  const fetchUsers = async () => {
    setLoading(true);
    const res = await api.get("/admin/manage-users/all");
    setUsers(res.data.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ===== DELETE USER =====
  const deleteUser = async (id) => {
    if (window.confirm("Delete user?")) {
      await api.delete(`/admin/manage-users/remove/${id}`);
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
                style={{marginBottom:"20px"}}
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
                  {loading ? (
                    <tr>
                      <td colSpan="5">Loading...</td>
                    </tr>
                  ) : (
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

                            <button className="delete-btn" onClick={() => deleteUser(u._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
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