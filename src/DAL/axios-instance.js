import * as axios from "axios";


const instence = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true ,
    headers: {
        'API-KEY' : '79d12926-d48c-41e2-88eb-321f3331f826'
    }
});

export default instence;
