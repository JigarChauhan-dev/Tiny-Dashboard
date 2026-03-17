import Cookie from "js-cookie";

function Logout(){
    try {
        Cookie.remove("token")
        alert("Logout Successful")
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
export { LogoutWithoutNotification }