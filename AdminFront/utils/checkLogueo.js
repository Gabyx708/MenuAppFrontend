export default function checkLogueo(){
    let user = sessionStorage.getItem("user");

    if(user === null){
            location.href = "../index.html";
    }
}