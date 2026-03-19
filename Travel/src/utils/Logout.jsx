import cookie from "js-cookie";

function Logout(navigate) {
  cookie.remove("token");
  alert("Logout Successful");
  if (navigate) {
    navigate("/login");
  } else {
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
