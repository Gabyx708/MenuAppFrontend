export const saveMenu = (menu) => {
    sessionStorage.setItem("menu",JSON.stringify(menu))
}

export const getMenu = () => {
    const menuSaved = sessionStorage.getItem("menu")
    return JSON.parse(menuSaved)
}