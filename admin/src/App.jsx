import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import AuthConfirm from "./Pages/AuthConfirm"
import HalfLogin from "./Pages/HalfLogin"
import Login from "./Pages/Login"
import Resetpw from "./Pages/Resetpw"
import Calender from "./Pages/Calender"
import Chart from "./Pages/Chart"
import ChartJs from "./ChartJs"
import ChartInline from "./Pages/ChartInline"
import ContactsGrid from "./Pages/ContactsGrid"
import Contactslist from "./Pages/Contactslist"
import ContactsNew from "./Pages/ContactsNew"
import DashAnalytics from "./Pages/DashAnalytics"
import DashSaas from "./Pages/DashSaas"
import DashSales from "./Pages/DashSales"
import DashSystem from "./Pages/DashSystem"
import DataMaps from "./Pages/DataMaps"
import FilesGrid from "./Pages/FilesGrid"
import FileList from "./Pages/FileList"
import FormAdvance from "./Pages/FormAdvance"
import FormElements from "./Pages/FormElements"
import FormLayouts from "./Pages/FormLayouts"
import FormUploads from "./Pages/FormUploads"
import FormValidation from "./Pages/FormValidation"
import FormWizards from "./Pages/FormWizards"
import IndexBoxed from "./Pages/IndexBoxed"
import IndexVertical from "./Pages/IndexVertical"
import IndexHorizontal from "./Pages/IndexHorizontal"
import Invoice from "./Pages/Invoice"
import Orders from "./Pages/Orders"
import Timeline from "./Pages/Timeline"
import Notification from "./Pages/Notification"
import Security from "./Pages/Security"
import Settings from "./Pages/Settings"
import Profile from "./Pages/Profile"
import SupportCenter from "./Pages/SupportCenter"
import SupportFaq from "./Pages/SupportFaq"
import SupportTicDetail from "./Pages/SupportTicDetail"
import SupportTickets from "./Pages/SupportTickets"
import TableAdvanced from "./Pages/TableAdvanced"
import TableBasic from "./Pages/TableBasic"
import TableDatatable from "./Pages/TableDatatable"
import UiButtons from "./Pages/UiButtons"
import UiColor from "./Pages/UiColor"
import UiIcons from "./Pages/UiIcons"
import UiModels from "./Pages/UiModels"
import UiNotification from "./Pages/UiNotification"
import UiProgress from "./Pages/UiProgress"
import UiAccordian from "./Pages/UiAccordian"
import UiTypograpy from "./Pages/UiTypograpy"
import Widgets from "./Pages/Widgets"
import Error404 from "./Pages/Error404"
import Error500 from "./Pages/Error500"
import PageBlank from "./Pages/PageBlank"
import ChartApex from "./Pages/ChartApex"
import ProtectPage from "./utils/ProtectPage"
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

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectPage><Home/></ProtectPage> } />
        <Route path="/authconfirm" element={<AuthConfirm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/halflogin" element={<HalfLogin/>} />
        
        <Route path="/resetpw" element={<Resetpw/>} />
        <Route path="/calender" element={<Calender/>} />
        <Route path="/chart" element={<Chart/>} />
        <Route path="/chartapex" element={<ChartApex/>} />
        <Route path="/chartjs" element={<ChartJs/>} />
        <Route path="/chartinline" element={<ChartInline/>} />
        <Route path="/contactsgrid" element={<ContactsGrid/>} />
        <Route path="/contactslist" element={<Contactslist/>} />
        <Route path="/contactsnew" element={<ContactsNew/>} />
        <Route path="/analytics" element={<DashAnalytics/>} />
        <Route path="/saas" element={<DashSaas/>} />
        <Route path="/sales" element={<DashSales/>} />
        <Route path="/system" element={<DashSystem/>} />
        <Route path="/datamaps" element={<DataMaps/>} />
        <Route path="/filegrid" element={<FilesGrid/>} />
        <Route path="/filelist" element={<FileList/>} />
        <Route path="/formadvance" element={<FormAdvance/>} />
        <Route path="/formelements" element={<FormElements/>} />
        <Route path="/formlayouts" element={<FormLayouts/>} />
        <Route path="/formuplods" element={<FormUploads/>} />
        <Route path="/formvalidation" element={<FormValidation/>} />
        <Route path="/formwizards" element={<FormWizards/>} />
        <Route path="/indexboxed" element={<IndexBoxed/>} />
        <Route path="/indexhorizontal" element={<IndexHorizontal/>} />
        <Route path="/indexvertical" element={<IndexVertical/>} />
        <Route path="/invoice" element={<Invoice/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/supportcenter" element={<SupportCenter/>} />
        <Route path="/supportfaq" element={<SupportFaq/>} />
        <Route path="/supportticdetail" element={<SupportTicDetail/>} />
        <Route path="/supporttickets" element={<SupportTickets/>} />
        <Route path="/tableadvanced" element={<TableAdvanced/>} />
        <Route path="/tablebasic" element={<TableBasic/>} />
        <Route path="/tabledata" element={<TableDatatable/>} />
        <Route path="/uibuttons" element={<UiButtons/>} />
        <Route path="/uicolor" element={<UiColor/>} />
        <Route path="/uiicons" element={<UiIcons/>} />
        <Route path="/uimodels" element={<UiModels/>} />
        <Route path="/uinotification" element={<UiNotification/>} />
        <Route path="/uiprograss" element={<UiProgress/>} />
        <Route path="/uiaccordian" element={<UiAccordian/>} />
        <Route path="/uitypograpy" element={<UiTypograpy/>} />
        <Route path="/widgets" element={<Widgets/>} />
        <Route path="/error404" element={<Error404/>} />
        <Route path="/error500" element={<Error500/>} />
        <Route path="/pageblank" element={<PageBlank/>} />

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