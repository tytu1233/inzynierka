import axios from 'axios';

const USERS_BASE_REST_API_URL = "http://localhost:8080/users"

class UsersService {

    getUsersByLoginAndEmail(login, email) {
        return axios.get(USERS_BASE_REST_API_URL + '/data/' + login + '/' + email);
    }

    getUsersByLoginAndPassword(login, password) {
        return axios.get(USERS_BASE_REST_API_URL + '/login/' + login + '/' + password);
    }

    getAllUsers() {
        return axios.get(USERS_BASE_REST_API_URL);
    }

    getUserById(userId) {
        return axios.get(USERS_BASE_REST_API_URL + '/' + userId);
    }

    getUserEmail(email) {
        return axios.get(USERS_BASE_REST_API_URL + '/email/' + email);
    }

    createUser(user) {
        return axios.post(USERS_BASE_REST_API_URL + '/1', user);
    }

    updateUser(userId, user) {
        return axios.put(USERS_BASE_REST_API_URL + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(USERS_BASE_REST_API_URL + '/' + userId);
    }

}

export default new UsersService();