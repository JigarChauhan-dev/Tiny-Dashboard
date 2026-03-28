import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

function AdminManageState() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    _id: null,
    state_name: "",
    status: "ACTIVE",
  });

  async function fetchStates() {
    try {
      const res = await api.get("/states/all");
      return res.data.data || [];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const {
    data: states = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["states"],
    queryFn: fetchStates,
  });

  const openAddForm = () => {
    setFormData({ _id: null, state_name: "", status: "ACTIVE" });
    setShowForm(true);
  };

  const openEditForm = (item) => {
    setFormData({
      _id: item._id,
      state_name: item.state_name,
      status: item.status,
    });
    setShowForm(true);
  };

  const saveState = async (formData) => {
    if (formData._id) {
      // UPDATE
      const res = await api.put(`/states/edit/${formData._id}`, {
        state_name: formData.state_name,
        status: formData.status,
      });
      return res.data;
    } else {
      // ADD
      const res = await api.post("/states/add", {
        state_name: formData.state_name,
        status: formData.status,
      });
      return res.data;
    }
  };

  const mutation = useMutation({
    mutationFn: saveState,

    onSuccess: (data, variables) => {

      if (variables._id) {
        toast.success("State updated successfully");
      } else {
        toast.success("State added successfully");
      }

      fetchStates();
      setShowForm(false);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.state_name) {
      return toast.error("State name required");
    }

    mutation.mutate(formData);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this state?")) {
      await api.delete(`/states/remove/${id}`);
      fetchStates();
    }
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">
          <div className="top-bar">
            <h2>Manage State</h2>
            <button className="add-btn" onClick={openAddForm}>
              + Add State
            </button>
          </div>

          {showForm && (
            <form className="heritage-form" onSubmit={handleSubmit}>
              <h3>{formData._id ? "Edit State" : "Add State"}</h3>

              <div className="form-grid">
                <input
                  placeholder="State Name"
                  value={formData.state_name}
                  onChange={(e) =>
                    setFormData({ ...formData, state_name: e.target.value })
                  }
                />

                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit">Save</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <table className="heritage-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    Loading...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="3" align="center" style={{ color: "red" }}>
                    Failed to load data
                  </td>
                </tr>
              ) : states.length > 0 ? (
                states.map((item) => (
                  <tr key={item._id}>
                    <td>{item.state_name}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => openEditForm(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" align="center">
                    No states found
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

export default AdminManageState;
