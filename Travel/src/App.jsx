import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import Footer from "./Common/Footer";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Error from "./Pages/Error";
import SearchResult from "./Pages/SearchResult";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Contact from './Pages/Contact';
import Book from "./Pages/Book";
import ProtectPage from "./utils/ProtectPage";
import HeritagePlace from "./Pages/HeritagePlace";
import Hotel from "./Pages/Hotel";
import FeedBack from "./Pages/FeedBack";
import HotelDetail from "./Pages/HotelDetail";
import HeritageDetail from "./Pages/HeritageDetail";
import BookHeritage from "./Pages/BookHeritage";
import BookingHistory from "./Pages/BookingHistory";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer  position="top-right" autoClose={1500} theme="colored"/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/404" element={<Error/>} />
          <Route path="/Search" element={<SearchResult/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/contact" element={ <Contact/>  } />
          <Route path="/book" element={ <ProtectPage> <Book/> </ProtectPage> } />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/heritageplace" element={<HeritagePlace/>} />
          <Route path="/hotel" element={<Hotel/>} />
          <Route path="/feedback" element={<ProtectPage> <FeedBack/> </ProtectPage> } />
          <Route path="/hoteldetail/:id" element={<HotelDetail/>} />
          <Route path="/heritagedetail/:id" element={<HeritageDetail/>} />
          <Route path="/bookheritage" element={<BookHeritage/>} />
          <Route path="/bookinghistory" element={<BookingHistory/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;