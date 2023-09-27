import axios from 'axios';

export const getAllImages = () => {
    return axios.get('http://localhost:8000/images/api/v1/images/');
}
