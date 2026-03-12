import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
function BookingHistory() {
  let [bookingdata, setBookingdata] = useState([]);
  let [userProfile, setUserProfile] = useState({});

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");
      setUserProfile(response.data.user);
    } catch (E) {
      console.log(E);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);

  async function fetchBooking() {
    try {
      let response = await api.get("/user/book/all");
      if (response.data.status) {
        setBookingdata(response.data.data);
      }
    } catch (error) {
      console.error("fetching Error", error);
    }
  }

  useEffect(() => {
    fetchBooking();
  }, []);

  console.log(bookingdata);

  return (
    <div className="expedition-history-container">
      {/* Heritage Breadcrumb */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to={"/"} className="home-link">
                  Home{" "}
                  <span
                    className="fa fa-angle-right"
                    style={{ color: "white" }}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className="active">Booking History</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="archives-section">
        <div className="archives-wrapper">
          <div className="archives-header">
            <h4>Booking Details</h4>
            <p>
              A historical record of your site visits and research
              consultations.
            </p>
          </div>

          <div className="archive-table-container">
            <table className="archive-table">
              <thead>
                <tr>
                  <th>Ref.</th>
                  <th>Visitor</th>
                  <th>Heritage Site</th>
                  <th>Date</th>
                  <th>Purpose</th>
                  <th>Ticket Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingdata.map((item, index) => (
                  <tr key={item._id}>
                    <td className="ref-col">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td>
                      <div className="visitor-name">{item.user_name}</div>
                      <div className="visitor-email">{item.user_email}</div>
                    </td>
                    <td className="heritage-col">{item.heritage_name}</td>
                    <td className="date-col">
                      {new Date(item.Date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="reason-col">{item.reason}</td>
                    <td className="price-col">₹{item.heritage_price}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingHistory;