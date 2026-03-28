import { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Aside from "../Common/Aside";
import Header from "../Common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function AdminBookingHistory() {
async function fetchBookings() {
  try {
    const res = await api.get("/admin/book");
    return res.data.data || [];
  } catch (err) {
    console.log(err);
    throw err; 
  }
}

const {
  data: bookings = [],
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: ["adminBookings"],
  queryFn: fetchBookings,
});

  async function handleDelete(id) {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await api.delete(`/user/book/remove/${id}`);
      toast.success("Booking deleted successfully ✅");
      fetchBookings(); // refresh list
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete booking ❌");
    }
  }

  return (
    <div className="wrapper">
      <Aside />
      <div className="main-content admin-main-content">
        <Header />

        <div className="admin-body">
          <div className="page-header">
            <h2>Booking History</h2>
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Heritage Site</th>
                <th>Date</th>
                <th>Ticket Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((item) => (
                  <tr key={item._id}>
                    <td>{item.user_name}</td>
                    <td>{item.heritage_name}</td>
                    <td>
                      {new Date(item.Date).toLocaleDateString()}
                    </td>
                    <td>₹ {item.heritage_price}</td>
                    <td>{item.status}</td>

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
                    Loading...
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

export default AdminBookingHistory;
// import  { useEffect, useState } from "react";
// import api from "../utils/AxiosConfig";
// import Aside from "../Common/Aside";
// import Header from "../Common/Header";
// import { toast } from "react-toastify";

// function AdminBookingHistory() {
//   const [bookings, setBookings] = useState([]);


//   const [formData, setFormData] = useState({
//     user_id: "",
//     heritage_id: "",
//     Date: "",
//     reason: "",
//     status: "PENDING",
//   });

//   async function fetchBookings() {
//     try {
//       let res = await api.get("/admin/book");
//       setBookings(res.data.data || []);
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to load bookings");
//     }
//   }

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   async function handleDelete(id) {
//     if (!window.confirm("Delete this booking?")) return;
//     try {
//       await api.delete(`/user/book/remove/${id}`);
//       toast.success("Booking deleted successfully");
//       fetchBookings();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <div className="wrapper">
//       <Aside />
//       <div className="main-content admin-main-content">
//         <Header />

//         <div className="admin-body">
//           {!showForm ? (
//             <>
//               <div className="page-header">
//                 <h2>Booking History</h2>
//               </div>

//               <table className="admin-table">
//                 <thead>
//                   <tr>
//                     <th>User</th>
//                     <th>Heritage Site</th>
//                     <th>Date</th>
//                     <th>Ticket Price</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {bookings.length > 0 ? (
//                     bookings.map((item) => (
//                       <tr key={item._id}>
//                         <td>{item.user_name}</td>
//                         <td>{item.heritage_name}</td>
//                         <td>{new Date(item.Date).toLocaleDateString()}</td>
//                         <td>₹ {item.heritage_price}</td>
//                         <td>{item.status}</td>
                        
//                         <td>
//                           {/* <button
//                             className="btn-action btn-reply"
//                             onClick={() => handleEdit(item)}
//                           >
//                             Edit
//                           </button> */}
//                           <button
//                             className="btn-action btn-delete"
//                             onClick={() => handleDelete(item._id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="7" align="center">
//                         No bookings found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </>
//           ) 
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminBookingHistory;
