import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageHotel() {
  const [hotels, setHotels] = useState([]);
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
      let res = await api.get("/hotels/all");
      setHotels(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchHotels();
  }, []);

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

  async function handleSubmit(e) {
    e.preventDefault();

    const formData2 = new FormData();
    formData2.append("city_id", formData.city_id);
    formData2.append("hotel_name", formData.hotel_name);
    formData2.append("address", formData.address);
    formData2.append("contact_number", formData.contact_number);
    formData2.append("lat", formData.lat);
    formData2.append("long", formData.long);
    formData2.append("price_range", formData.price_range);
    formData2.append("status", formData.status);
    formData2.append("image_path", imageFile);
    

    // try {
    if (editId) {
      await api.put(`/hotels/update/${editId}`, formData2);
      alert("Hotel Updated Successfully");
    } else {
      await api.post("/hotels/add", formData2);
      alert("Hotel Added Successfully");
    }

    setShowForm(false);
    fetchHotels();
    // } catch (err) {
    //   console.log(err);
    //   alert("Operation Failed");
    // }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this hotel?")) return;
    try {
      await api.delete(`/hotels/remove/${id}`);
      fetchHotels();
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
                <button className="btn btn-primary" onClick={openAddForm}>
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
                  {hotels.length > 0 ? (
                    hotels.map((item) => (
                      <tr key={item._id}>
                        <td>{item.hotel_name}</td>
                        <td>{item.city_id}</td>
                        <td>₹ {item.price_range}</td>
                        <td>{item.status}</td>
                        <td>
                          <button
                            className="btn-action btn-reply"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
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

                <button className="btn btn-primary" onClick={handleSubmit}>
                  {editId ? "Update Hotel" : "Save Hotel"}
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
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="text"
                  name="city_id"
                  placeholder="City ID"
                  value={formData.city_id || ""}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="tel"
                  name="contact_number"
                  placeholder="Contact Number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="number"
                  name="price_range"
                  placeholder="Price Per Night"
                  value={formData.price_range}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="text"
                  name="lat"
                  placeholder="Latitude"
                  value={formData.lat}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="text"
                  name="long"
                  placeholder="Longitude"
                  value={formData.long}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                />

                <input
                  type="file"
                  name="image_path"
                  placeholder="Image URL"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
                  required={!editId}
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-control"
                  style={{marginBottom:"10px"}}
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
