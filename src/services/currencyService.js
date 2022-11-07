import {axiosService} from "./axiosService";

const currencyService = {
    getAll:()=>axiosService.get('')
}
export {currencyService}
