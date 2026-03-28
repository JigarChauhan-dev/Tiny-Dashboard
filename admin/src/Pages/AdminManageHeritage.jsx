import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

function AdminManageHeritage() {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  const [formData, setFormData] = useState({
    city_id: "",
    name: "",
    description: "",
    history: "",
    ticket_price: "",
    lat: "",
    long: "",
    address: "",
    video_path: "",
    status: "ACTIVE",
  });

  async function fetchHeritage() {
    try {
      const res = await api.get("/heritage/all");
      return res.data.data || [];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const {
    data: heritage = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["heritage"],
    queryFn: fetchHeritage,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  function handleGalleryChange(e) {
    setGalleryFiles([...e.target.files]);
  }

  function openAddForm() {
    setShowForm(true);
    setEditId(null);
    setFormData({
      city_id: "",
      name: "",
      description: "",
      history: "",
      ticket_price: "",
      lat: "",
      long: "",
      address: "",
      video_path: "",
      status: "ACTIVE",
    });
    setImageFile(null);
    setGalleryFiles([]);
  }

  function handleEdit(item) {
    setShowForm(true);
    setEditId(item._id);
    setFormData({
      city_id: item.city_id,
      name: item.name,
      description: item.description,
      history: item.history,
      ticket_price: item.ticket_price,
      lat: item.lat,
      long: item.long,
      address: item.address,
      video_path: item.video_path,
      status: item.status,
    });
  }
  const saveHeritage = async ({
    formData,
    editId,
    imageFile,
    galleryFiles,
  }) => {
    const formData2 = new FormData();

    formData2.append("city_id", formData.city_id);
    formData2.append("name", formData.name);
    formData2.append("description", formData.description);
    formData2.append("history", formData.history);
    formData2.append("lat", formData.lat);
    formData2.append("long", formData.long);
    formData2.append("address", formData.address);
    formData2.append("status", formData.status);
    formData2.append("ticket_price", formData.ticket_price);
    formData2.append("video_path", formData.video_path);

    if (imageFile) {
      formData2.append("image_path", imageFile);
    }

    for (let i = 0; i < galleryFiles.length; i++) {
      formData2.append("gallery_images", galleryFiles[i]);
    }

    if (editId) {
      const res = await api.put(`/heritage/update/${editId}`, formData2);
      return res.data;
    } else {
      const res = await api.post("/heritage/add", formData2);
      return res.data;
    }
  };

  const mutation = useMutation({
    mutationFn: saveHeritage,

    onSuccess: (data, variables) => {
      if (variables.editId) {
        toast.success("Updated successfully");
      } else {
        toast.success("Added successfully");
      }

      setShowForm(false);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });
  async function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({
      formData,
      editId,
      imageFile,
      galleryFiles,
    });
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this heritage?")) return;
    try {
      await api.delete(`/heritage/remove/${id}`);
      fetchHeritage();
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
          <div className="top-bar">
            <h2>Heritage Management</h2>
            <button
              className="add-btn"
              onClick={openAddForm}
              
            >
              + Add Heritage
            </button>
          </div>

          {showForm && (
            <form
              className="heritage-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <h3>{editId ? "Edit Heritage" : "Add Heritage"}</h3>

              <div className="form-grid">
                <input
                  type="text"
                  name="city_id"
                  placeholder="City ID"
                  value={formData.city_id}
                  onChange={handleChange}
                />
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <textarea
                  name="history"
                  placeholder="History"
                  value={formData.history}
                  onChange={handleChange}
                />

                <input
                  name="ticket_price"
                  placeholder="Ticket Price"
                  value={formData.ticket_price}
                  onChange={handleChange}
                />
                <input
                  name="lat"
                  placeholder="Latitude"
                  value={formData.lat}
                  onChange={handleChange}
                />
                <input
                  name="long"
                  placeholder="Longitude"
                  value={formData.long}
                  onChange={handleChange}
                />
                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />

                <input
                  name="video_path"
                  placeholder="Video URL"
                  value={formData.video_path}
                  onChange={handleChange}
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>

                <label>Image</label>
                <input
                  name="image_path"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required={!editId}
                />

                <label>Gallery Images</label>
                <input
                  name="gallery_images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryChange}
                  required={!editId}
                />
              </div>

              <div className="form-actions">
                <button type="submit" disabled={mutation.isPending}>
                  {mutation.isPending
                    ? editId
                      ? "Updating..."
                      : "Saving..."
                    : editId
                      ? "Update"
                      : "Save"}
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
                <th>Name</th>
                <th>City ID</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" align="center">
                    Loading...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="4" align="center" style={{ color: "red" }}>
                    ❌ Failed to load heritage data
                  </td>
                </tr>
              ) : heritage.length > 0 ? (
                heritage.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.city_id}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Edit.." : "Edit"}
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
                  <td colSpan="4" align="center">
                    No heritage found...
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

export default AdminManageHeritage;
