import Axios from "./caller"

const getAllUsers = () => {
    return Axios.get('/');
}

const getUser = (id) => {
    return Axios.get('/users' + id);
}

const getUserProfile = () => {
    return Axios.get('/profile');
}

export const userService = {
    getAllUsers, getUser, getUserProfile
}