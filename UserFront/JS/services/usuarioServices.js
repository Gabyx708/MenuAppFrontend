export const saveUser = (user) => {
    sessionStorage.setItem("user",JSON.stringify(user));
}

export const getUser = () => {
    const userSaved = sessionStorage.getItem("user");
    return JSON.parse(userSaved);
}