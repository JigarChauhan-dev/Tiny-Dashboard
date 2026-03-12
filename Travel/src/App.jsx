import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import Footer from "./Common/Footer";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import Galley from "./Pages/Galley";
import Team from "./Pages/Team";
import TeramMember from "./Pages/TeramMember";
import Timeline from "./Pages/Timeline";
import Faq from "./Pages/Faq";
import ComingSonn from "./Pages/ComingSonn";
import Error from "./Pages/Error";
import SearchResult from "./Pages/SearchResult";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SinglePage from "./Pages/SinglePage";
import Portfolio from "./Pages/Portfolio";
import PortfolioSingle from "./Pages/PortfolioSingle";
import Blog from './Pages/Blog';
import BlogSingle from "./Pages/BlogSingle";
import Ecommerc from './Pages/Ecommerc';
import EcommerceSingle from './Pages/EcommerceSingle';
import EcommerceCart from './Pages/EcommerceCart';
import Contact from './Pages/Contact';
import Book from "./Pages/Book";
// import Profile from "./utils/Profile";
import ProtectPage from "./utils/ProtectPage";
import HeritagePlace from "./Pages/HeritagePlace";
import Weather from "./Pages/Weather";
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
// import EditProfile from "./utils/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* Pages */}
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Galley/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/teamMember" element={<TeramMember/>} />
          <Route path="/timeline" element={<Timeline/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/ComingSoon" element={<ComingSonn/>} />
          <Route path="/404" element={<Error/>} />
          <Route path="/Search" element={<SearchResult/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/single" element={<ProtectPage> <SinglePage/> </ProtectPage> }/>
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/portfolioSingle" element={<PortfolioSingle/>} />
          {/* Blog */}
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogsingle" element={<BlogSingle/>} />
          {/* Shop */}
          <Route path="/ecommerce" element={<ProtectPage> <Ecommerc/> </ProtectPage>} />
          <Route path="/ecommercesingle" element={<ProtectPage> <EcommerceSingle/> </ProtectPage> } />
          <Route path="/ecommercecart" element={<ProtectPage> <EcommerceCart/> </ProtectPage> } />
          <Route path="/contact" element={ <Contact/>  } />
          <Route path="/book" element={ <ProtectPage> <Book/> </ProtectPage> } />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/heritageplace" element={<HeritagePlace/>} />
          <Route path="/weather" element={<Weather/>} />
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