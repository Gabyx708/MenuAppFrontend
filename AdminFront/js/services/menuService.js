export const saveMenu = (menu) =>{
    sessionStorage.setItem("menu",menu)
}

export const getMenu = () => {
    return sessionStorage.getItem("menu");
}