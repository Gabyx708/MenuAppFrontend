export const saveToken = (token) => {
    sessionStorage.setItem("token",token)
}

export const getToken = () => {
    return sessionStorage.getItem("token")
}