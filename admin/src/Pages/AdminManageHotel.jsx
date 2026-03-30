import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function AdminManageHotel() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    hotel_name: "",
    city_id: "",
    address: "",
    contact_number: "",
    image_path: "",
    lat: "",
    long: "",
    price_range: "",
    status: "ACTIVE",
  });

  async function fetchHotels() {
    try {
      const res = await api.get("/hotels/all");
      return res.data.data || [];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const {
    data: hotels = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  console.log(formData);

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  function openAddForm() {
    setShowForm(true);
    setEditId(null);
    setFormData({
      hotel_name: "",
      city_id: "",
      address: "",
      contact_number: "",
      image_path: "",
      lat: "",
      long: "",
      price_range: "",
      status: "ACTIVE",
    });
    setImageFile(null);
  }

  function handleEdit(item) {
    setShowForm(true);
    setEditId(item._id);
    setFormData({
      hotel_name: item.hotel_name,
      city_id: item.city_id,
      address: item.address,
      contact_number: item.contact_number,
      image_path: item.image_path,
      lat: item.lat,
      long: item.long,
      price_range: item.price_range,
      status: item.status,
    });
  }

  const saveHotel = async ({ formData, editId, imageFile }) => {
    const formData2 = new FormData();

    formData2.append("city_id", formData.city_id);
    formData2.append("hotel_name", formData.hotel_name);
    formData2.append("address", formData.address);
    formData2.append("contact_number", formData.contact_number);
    formData2.append("lat", formData.lat);
    formData2.append("long", formData.long);
    formData2.append("price_range", formData.price_range);
    formData2.append("status", formData.status);

    if (imageFile) {
      formData2.append("image_path", imageFile);
    }

    if (editId) {
      const res = await api.put(`/hotels/update/${editId}`, formData2);
      return res.data;
    } else {
      const res = await api.post("/hotels/add", formData2);
      return res.data;
    }
  };

  const mutation = useMutation({
    mutationFn: saveHotel,

    onSuccess: (data, variables) => {
      if (variables.editId) {
        toast.success("Hotel Updated Successfully");
      } else {
        toast.success("Hotel Added Successfully");
      }

      queryClient.invalidateQueries({ queryKey: ["hotels"] });
      setShowForm(false);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    mutation.mutate({
      formData,
      editId,
      imageFile,
    });
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/hotels/remove/${id}`);
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
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
              {/* HEADER (same as Heritage) */}
              <div className="page-header">
                <h2>Hotel Management</h2>
                <button className="add-btn" onClick={openAddForm}>
                  + Add Hotel
                </button>
              </div>

              {/* TABLE (same as Heritage) */}
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Hotel Name</th>
                    <th>City ID</th>
                    <th>Price</th>
                    <th>Status</th>
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
                      <td colSpan="5" align="center">
                        Error loading hotels
                      </td>
                    </tr>
                  ) : hotels.length > 0 ? (
                    hotels.map((item) => (
                      <tr key={item._id}>
                        <td>{item.hotel_name}</td>
                        <td>{item.city_id}</td>
                        <td>₹ {item.price_range}</td>
                        <td>{item.status}</td>
                        <td>
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(item._id)}
                            disabled={deleteMutation.isPending}
                          >
                            {deleteMutation.isPending
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" align="center">
                        No hotels found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <>
              {/* FORM HEADER */}
              <div className="page-header">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Back
                </button>

                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending
                    ? editId
                      ? "Updating..."
                      : "Saving..."
                    : editId
                      ? "Update Hotel"
                      : "Save Hotel"}
                </button>
              </div>

              {/* FORM (same as Heritage) */}
              <form
                onSubmit={handleSubmit}
                className="form-card"
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  name="hotel_name"
                  placeholder="Hotel Name"
                  value={formData.hotel_name}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  name="city_id"
                  placeholder="City ID"
                  value={formData.city_id || ""}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="tel"
                  name="contact_number"
                  placeholder="Contact Number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="number"
                  name="price_range"
                  placeholder="Price Per Night"
                  value={formData.price_range}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  name="lat"
                  placeholder="Latitude"
                  value={formData.lat}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="text"
                  name="long"
                  placeholder="Longitude"
                  value={formData.long}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />

                <input
                  type="file"
                  name="image_path"
                  placeholder="Image URL"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                  required={!editId}
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminManageHotel;
