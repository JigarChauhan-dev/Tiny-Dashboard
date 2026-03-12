import Cookie from "js-cookie";

function Logout(){
    try {
        Cookie.remove("token")
        alert("Logout Successful")
        window.location.href = "/login"
    } catch (error) {
        console.log(error);
    }
}

function LogoutWithoutNotification() {
    try {
        Cookie.remove("token");
        window.location.href = "/login"
    } catch (error) {
        console.log(error);
    }
}

export default Logout;
export { LogoutWithoutNotification }