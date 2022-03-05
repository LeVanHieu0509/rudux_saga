import { City } from './../models/city';
import { ListResponse } from "models/index";
import axiosClient from "./axiosClient"

const cityApi = {
    getAll(): Promise<ListResponse<City>>
    {
        const url = '/cities'
        return axiosClient.get(url, {
            params: {
                _page:1,
                limit:10
            }
        });
    }
}

export default cityApi