import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function AdminManageLocation() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    _id: null,
    city_name: "",
    state_id: "",
    status: "ACTIVE",
  });

  async function fetchCities() {
    try {
      const res = await api.get("/cities/all");
      return res.data.data || [];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

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
    data: cities = [],
    isLoading: citiesLoading,
    isError: citiesError,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: fetchCities,
  });

  const {
    data: states = [],
    isLoading: statesLoading,
    isError: statesError,
  } = useQuery({
    queryKey: ["states"],
    queryFn: fetchStates,
  });

  const openAddForm = () => {
    setFormData({
      _id: null,
      city_name: "",
      state_id: "",
      status: "ACTIVE",
    });
    setShowForm(true);
  };

  const openEditForm = (item) => {
    setFormData({
      _id: item._id,
      city_name: item.city_name,
      state_id: item.state_id,
      status: item.status,
    });
    setShowForm(true);
  };

  const saveCity = async (formData) => {
    if (formData._id) {
      // UPDATE
      const res = await api.put(`/cities/edit/${formData._id}`, {
        city_name: formData.city_name,
        state_id: formData.state_id,
        status: formData.status,
      });
      return res.data;
    } else {
      // ADD
      const res = await api.post("/cities/add", {
        city_name: formData.city_name,
        state_id: formData.state_id,
        status: formData.status,
      });
      return res.data;
    }
  };

  const mutation = useMutation({
    mutationFn: saveCity,

    onSuccess: (data, variables) => {
      if (variables._id) {
        toast.success("City updated successfully");
      } else {
        toast.success("City added successfully");
      }

      queryClient.invalidateQueries({ queryKey: ["cities"] });

      setShowForm(false);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.city_name || !formData.state_id) {
      return toast.error("City name and State required");
    }

    mutation.mutate(formData);
  };

  const handleDelete = async (id) => {
    await api.delete(`/cities/remove/${id}`);
    queryClient.invalidateQueries({ queryKey: ["cities"] });
  };

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">
          <div className="top-bar">
            <h2>Manage City</h2>
            <button className="add-btn" onClick={openAddForm}>
              + Add City
            </button>
          </div>

          {showForm && (
            <form className="heritage-form" onSubmit={handleSubmit}>
              <h3>{formData._id ? "Edit City" : "Add City"}</h3>

              <div className="form-grid">
                <input
                  placeholder="City Name"
                  value={formData.city_name}
                  onChange={(e) =>
                    setFormData({ ...formData, city_name: e.target.value })
                  }
                />

                <select
                  value={formData.state_id}
                  onChange={(e) =>
                    setFormData({ ...formData, state_id: e.target.value })
                  }
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.state_name}
                    </option>
                  ))}
                </select>

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
                <button type="submit" disabled={mutation.isPending}>
                  {mutation.isPending
                    ? formData._id
                      ? "Updating..."
                      : "Adding..."
                    : formData._id
                      ? "Update City"
                      : "Add City"}
                </button>
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
                <th>City</th>
                <th>State</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {citiesLoading || statesLoading ? (
                <tr>
                  <td colSpan="4" align="center">
                    Loading...
                  </td>
                </tr>
              ) : citiesError || statesError ? (
                <tr>
                  <td colSpan="4" align="center" style={{ color: "red" }}>
                    Failed to load data
                  </td>
                </tr>
              ) : cities.length > 0 ? (
                cities.map((item) => (
                  <tr key={item._id}>
                    <td>{item.city_name}</td>
                    <td>
                      {states.find((s) => s._id === item.state_id)
                        ?.state_name || "N/A"}
                    </td>
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
                        onClick={(e) => {
                          e.target.innerText = "Deleting..";
                          handleDelete(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" align="center">
                    No cities found
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

export default AdminManageLocation;
