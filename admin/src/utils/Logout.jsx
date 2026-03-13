import cookie from "js-cookie";

function Logout() {
  try {
    cookie.remove("token");
    alert("Logout Successful.");
    cookie.remove("token");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
}

function LogoutWithoutNotification() {
  try {
    cookie.remove("token");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };