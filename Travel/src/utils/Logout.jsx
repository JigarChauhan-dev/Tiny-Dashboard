import cookie from "js-cookie";

function Logout() {
  cookie.remove("token");
  alert("Logout Successful");
  window.location.href = "/login";
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
