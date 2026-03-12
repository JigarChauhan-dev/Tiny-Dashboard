import Cookie from "js-cookie";

function CheckToken(){
    try {
        let token = Cookie.get("token")
        return token
    } catch (error) {
        console.log(error);
    }
}

export default CheckToken;