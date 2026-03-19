import cookie from "js-cookie";

function Logout() {
  cookie.remove("token");
  if (navigate) {
    alert("Logout Successful");
    navigate("/login");
  } else {
    alert("Logout Successful");
    window.location.href = "/login";
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
