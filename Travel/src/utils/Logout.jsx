import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();

  try {
    Cookie.remove("token");
    alert("Logout Successful");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
}

function LogoutWithoutNotification() {
  try {
    Cookie.remove("token");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };
