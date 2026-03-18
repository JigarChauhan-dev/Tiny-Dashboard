import cookie from "js-cookie";
import {useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();

  try {
    cookie.remove("token");
    alert("Logout Successful");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
}

function LogoutWithoutNotification() {
  try {
    cookie.remove("token");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };
