import axios from "axios";
import {_apikey, _baseURL} from "../configs/constants";

const axiosService = axios.create({
    baseURL:_baseURL,
    headers:{
        'apikey':_apikey
    }
})

export {axiosService}
