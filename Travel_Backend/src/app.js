let cors = require("cors");
let express = require("express");
let app = express();

// common
let AuthRoutes = require("./routes/auth.route");

// user
let UserRoutes = require("./routes/user/user.route");
let UserFeedback = require("./routes/user/feedback.routes");
let Booking = require("./routes/user/book.routes");
let razorpay = require("./routes/user/razorpay.route")
let updateprofile = require("./routes/user/user.route");
let forgetpassword = require("./routes/user/forgetpass.route");
let resetpassword = require("./routes/user/forgetpass.route");
let userinquiries = require("./routes/user/inquiries.routes");
let UserHeritage = require("./routes/user/heritage.routes");
let UserCityRoute = require("./routes/user/city.routes");
let UserStateRoute = require("./routes/user/state.routes");
let UserHotelRoute = require("./routes/user/hotel.routes");

// admin
let AdminRoutes = require("./routes/admin/admin.routes");
let stateRoutes = require("./routes/admin/state.routes");
let cityRoutes = require("./routes/admin/city.routes");
let heritageRoutes = require("./routes/admin/heritage.routes");
let userSubRoutes = require("./routes/admin/userSubscription.routes");
let paymentRoutes = require("./routes/admin/payment.routes");
let hotelRoutes = require("./routes/admin/hotel.routes");
let feedbackRoutes = require("./routes/admin/feedback.routes");
const adminUserRoutes = require("./routes/admin/users.routes");
let admininquiries = require("./routes/admin/inquiries.routes");
let adminbook = require("./routes/admin/book.routes");
const cookieParser = require('cookie-parser')

// MiddleWare
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["https://tiny-dashboard.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// common
app.use("/api/uploads",express.static("src/uploads"));
app.use("/api/uploads/heritage",express.static("src/uploads/heritage"));

// Routes User
// app.use("/audio", express.static(__dirname + "/../uploads/audio"));
app.use("/api/auth", AuthRoutes); 
app.use("/api/user", UserRoutes);
app.use("/api/user/feedbacks",UserFeedback);
app.use("/api/user/book",Booking)
app.use("/api/user/payment",razorpay);
app.use("/api/user/profile",updateprofile);
app.use("/api/user/password",forgetpassword);
app.use("/api/user/resetpassword",resetpassword);
app.use("/api/user/inquiries",userinquiries);
app.use("/api/user/heritage",UserHeritage);
app.use("/api/user/cities",UserCityRoute);
app.use("/api/user/states",UserStateRoute);
app.use("/api/user/hotels",UserHotelRoute);

// Route Admin
app.use("/api/admin",AdminRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/heritage", heritageRoutes);
app.use("/api/user-subscriptions", userSubRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/admin/manage-users", adminUserRoutes);
app.use("/api/admin/inquiries",admininquiries);
app.use("/api/admin/book",adminbook)

module.exports = app;