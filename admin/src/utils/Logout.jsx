import cookie from "js-cookie";
import { toast } from "react-toastify";

function Logout() {
  try {
    cookie.remove("token");
    toast.success("Logout Successful", {
      onClose: () => {
        window.location.replace = "/login";
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function LogoutWithoutNotification() {
  try {
    cookie.remove("token");
    window.location.replace = "/login";
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };
