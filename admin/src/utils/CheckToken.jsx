import cookie from "js-cookie";

function CheckAdminToken(){
    try {
        let token = cookie.get("token");
        return token;
    } catch (error) {
        console.log(error);
    }
}

export default CheckAdminToken;