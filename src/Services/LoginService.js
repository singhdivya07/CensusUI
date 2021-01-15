import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";

const LOGIN_API_BASE_URL = "http://localhost:8081/api/login";

class LoginService {

    login = (user) => {
        return axios.post(LOGIN_API_BASE_URL, user).then(handleResponse)
            .catch(handleError);
    }

}

export default new LoginService();