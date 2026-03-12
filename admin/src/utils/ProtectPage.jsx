import CheckAdminToken from "../utils/CheckToken";


function ProtectPage({children}){
    if(!CheckAdminToken()){
        alert("Kindly Login First.");
        window.location.href = "/login";
    }
    return children;
}

export default ProtectPage;