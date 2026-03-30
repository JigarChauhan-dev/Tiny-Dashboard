import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AdminManageHotel from "./Pages/AdminManageHotel"
import AdminManageUsers from "./Pages/AdminManageUsers"
import AdminManageHeritage from "./Pages/AdminManageHeritage"
import AdminManageGuide from "./Pages/AdminManageGuide"
// import AdminManageSubscription from "./Pages/AdminManageSubscription"
import AdminUserSubscription from "./Pages/AdminUserSubscription"

import AdminManageFeedback from "./Pages/AdminManageFeedback"
import AdminManageLocation from "./Pages/AdminManageLocation"
import AdminManagePlan from "./Pages/AdminManagePlan"
import BookingHistory from "./Pages/AdminBookingHistory"
import AdminManageState from "./Pages/AdminManageState"
import AdminManageInquiries from "./Pages/AdminManageInquiries"
import AdminManageBooking from "./Pages/AdminManageBooking"
import ProtectPages from "./utils/ProtectPage"
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <>
    <ToastContainer  position="top-right" autoClose={1200} theme="colored"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectPages><Home/></ProtectPages> } />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/adminmanageheritage" element={<AdminManageHeritage/>} />
        <Route path="/adminmanageguide" element={<AdminManageGuide/>} />
        <Route path="/adminmanageplan" element={<AdminManagePlan/>} />
        <Route path="/adminusersubcription" element={<AdminUserSubscription/>} />
        <Route path="/adminmanagebooking" element={<AdminManageBooking/>} />
        <Route path="/adminmanagefeedback" element={<AdminManageFeedback/>} />
        <Route path="/adminmanagehotel" element={<AdminManageHotel/>} />
        <Route path="/adminmanagelocation" element={<AdminManageLocation/>} />
        <Route path="/adminbookinghistory" element={<BookingHistory/>} />
        <Route path="/adminmanagestate" element={<AdminManageState/>} />
        <Route path="/adminmanageinquiries" element={<AdminManageInquiries/>} />
        <Route path="/adminmanageusers" element={<AdminManageUsers/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App