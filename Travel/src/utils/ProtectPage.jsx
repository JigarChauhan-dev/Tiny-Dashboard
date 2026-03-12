import CheckToken from "./CheckToken";

function ProtectPage({ children }){
    if(!CheckToken()){
        alert("Kindly Login First.");
        window.location.href = "/login";
    }
    return children;
}

export default ProtectPage;