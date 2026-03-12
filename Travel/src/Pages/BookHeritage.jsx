import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";

function BookHeritage() {
  // const { id } = useParams();
  const today = new Date().toISOString().split("T")[0];
  const heritageData = useLocation().state;
  const [heritage , setHeritage] = useState(heritageData);
  console.log(heritage);
  
  let id = heritage._id;
  let ticketprice = heritage.ticket_price;
  console.log(ticketprice);
  

  let [booking, setBooking] = useState({
    date: "",
    reason: "",
    loginId: "",
    heritageId: id,
  });


  const [userProfile, setUserProfile] = useState({});

  function handleInputChange(e) {
    let { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(booking);

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");
      setUserProfile(response.data.user);
      setBooking((prev) => ({
        ...prev,
        loginId: response.data.user.id,
      }));
    } catch (E) {
      console.log(E);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);

  console.log(userProfile);

  console.log(booking);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // Create order via backend
      const response = await api.post("/user/payment/createorder", {
        amount: ticketprice, // Amount in rupees
        currency: "INR",
      });

      const { id: order_id, amount } = response.data.data;

      // Set up RazorPay options
      const options = {
        key: "rzp_test_VQhEfe2NCXbbwI", // Replace with your RazorPay Key ID
        amount: amount,
        currency: "INR",
        name: "Heritage",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          try {
            let response = await api.post(
              "/user/book/submit",
              booking,
              ticketprice,
            );
            console.log(response.data);
            setBooking(response.data.data);
            alert("Your visit has been scheduled successfully.");
            setBooking({
              date: "",
              reason: "",
              loginId: "",
              heritageId: id,
            });
            window.location.href = "/bookinghistory";
          } catch (error) {
            console.log(e);
          }
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <>
      <div>
        {/* Heritage Breadcrumb */}
        <section className="w3l-inner-banner-main">
          <div className="banner-9 sec-img">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link to={"/"}>
                    Home{" "}
                    <span
                      className="fa fa-angle-right"
                      style={{ color: "white" }}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li className="active">Book Heritage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Heritage Booking Form */}
        <section className="w3l-form-34-main">
          <div className="form34-sub">
            <div className="form34">
              <h4 className="form-head">Book Your Heritage Visit</h4>
              <p className="form-para">
                Experience history up close. Complete the form below to plan
                your visit.
              </p>

              <hr />

              <form>
                <div className="main-div" style={{ display: "block" }}>
                  <div className="field-group">
                    <input
                      type="hidden"
                      name="loginId"
                      value={booking.loginId}
                    />
                    <input
                      type="hidden"
                      name="heritageId"
                      value={booking.heritageId}
                    />
                  </div>

                  <div className="field-group mt-3">
                    <p className="text-head">Expedition Date</p>
                    <input
                      type="date"
                      name="date"
                      onChange={handleInputChange}
                      value={booking.date}
                      min={today}
                    />
                  </div>

                  <div className="field-group mt-3">
                    <p className="text-head">Reason for Visit</p>
                    <textarea
                      name="reason"
                      placeholder="Describe your purpose (Research, Educational, etc.)"
                      style={{ minHeight: "100px", paddingTop: "12px" }}
                      onChange={handleInputChange}
                      value={booking.reason}
                    />
                  </div>

                  <input
                    type="submit"
                    onClick={handlePayment}
                    className="buttonbg signinbutton"
                    value="Confirm Visit"
                    style={{
                      backgroundColor: "#000",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BookHeritage;
