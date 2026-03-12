import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";

function AdminManageLocation() {
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    _id: null,
    city_name: "",
    state_id: "",
    status: "ACTIVE",
  });

  const fetchCities = async () => {
    const res = await api.get("/cities/all");
    setCities(res.data.data || []);
  };

  const fetchStates = async () => {
    const res = await api.get("/states/all");
    setStates(res.data.data || []);
  };

  useEffect(() => {
    fetchCities();
    fetchStates();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.city_name || !formData.state_id) {
      return alert("City name and State required");
    }

    if (formData._id) {
      // UPDATE
      await api.put(`/cities/edit/${formData._id}`, {
        city_name: formData.city_name,
        state_id: formData.state_id,
        status: formData.status,
      });
    } else {
      // ADD
      await api.post("/cities/add", {
        city_name: formData.city_name,
        state_id: formData.state_id,
        status: formData.status,
      });
    }

    fetchCities();
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this city?")) {
      await api.delete(`/cities/remove/${id}`);
      fetchCities();
    }
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
                <th>City</th>
                <th>State</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((item) => (
                <tr key={item._id}>
                  <td>{item.city_name}</td>
                  <td>
                    {states.find((s) => s._id === item.state_id)?.state_name ||
                      "N/A"}
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
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default AdminManageLocation;

// import React, { useEffect, useState } from "react";
// import api from "../utils/AxiosConfig";
// import Aside from "../Common/Aside";
// import Header from "../Common/Header";

// function AdminManageLocation() {
//   const [cities, setCities] = useState([]);
//   const [states, setStates] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const [formData, setFormData] = useState({
//     _id: null,
//     city_name: "",
//     state_id: "",
//     status: "ACTIVE",
//   });

//   const fetchCities = async () => {
//     const res = await api.get("/cities/city");
//     setCities(res.data.data || []);
//   };

//   const fetchStates = async () => {
//     const res = await api.get("/states/all");
//     setStates(res.data.data || []);
//   };

//   console.log(states);

//   useEffect(() => {
//     fetchCities();
//     fetchStates();
//   }, []);

//   const openAddForm = () => {
//     setFormData({ _id: null, city_name: "", state_id: "", status: "ACTIVE" });
//     setShowForm(true);
//   };

//   const openEditForm = (item) => {
//     setFormData({
//       _id: item._id,
//       city_name: item.city_name,
//       state_id: item.state_id,
//       status: item.status,
//     });
//     setShowForm(true);
//     setImageFile(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.city_name || !formData.state_id) {
//       return alert("All fields required");
//     }

//     if (formData._id) {
//       // UPDATE
//       await api.put(`/cities/edit/${formData._id}`, {
//         city_name: formData.city_name,
//         state_id: formData.state_id,
//         status: formData.status,
//       });
//     } else {
//       // ADD
//       await api.post("/cities/add", {
//         city_name: formData.city_name,
//         state_id: formData.state_id,
//         status: formData.status,
//       });
//     }

//     fetchCities();
//     setShowForm(false);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this city?")) {
//       await api.delete(`/cities/remove/${id}`);
//       fetchCities();
//     }
//   };

//   return (
//     <div className="wrapper">
//       <Aside />
//       <div className="main-content admin-main-content">
//         <Header />

//         <div className="admin-body">
//           <div className="top-bar">
//             <h2>Manage Location</h2>
//             <button className="add-btn" onClick={openAddForm}>
//               + Add City
//             </button>
//           </div>

//           {showForm && (
//             <form className="heritage-form">
//               <h3>{formData._id ? "Edit City" : "Add City"}</h3>

//               <div className="form-grid">
//                 <input
//                   placeholder="City Name"
//                   value={formData.city_name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, city_name: e.target.value })
//                   }
//                 />

//                 <select
//                   value={formData.state_id}
//                   onChange={(e) =>
//                     setFormData({ ...formData, state_id: e.target.value })
//                   }
//                 >
//                   <option value="">Select State</option>
//                   {states.map((s) => (
//                     <option key={s._id} value={s._id}>
//                       {s.state_name}
//                     </option>
//                   ))}
//                 </select>

//                 <select
//                   value={formData.status}
//                   onChange={(e) =>
//                     setFormData({ ...formData, status: e.target.value })
//                   }
//                 >
//                   <option value="ACTIVE">ACTIVE</option>
//                   <option value="INACTIVE">INACTIVE</option>
//                 </select>
//               </div>

//               <div className="form-actions">
//                 <button type="button" onClick={handleSubmit}>
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setShowForm(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}

//           <table className="heritage-table">
//             <thead>
//               <tr>
//                 <th>City</th>
//                 <th>State</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cities.map((item) => (
//                 <tr key={item._id}>
//                   <td>{item.city_name}</td>
//                   <td>
//                     {states.find((s) => s._id === item.state_id)?.state_name ||
//                       "N/A"}
//                   </td>
//                   <td>{item.status}</td>
//                   <td>
//                     <button
//                       className="edit-btn"
//                       onClick={() => openEditForm(item)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(item._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminManageLocation;
