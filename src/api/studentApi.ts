import { listParams, ListResponse, students } from "models"
import axiosClient from "./axiosClient";

const studentApi = {
    getAll(params: listParams): Promise<ListResponse<students>>{
        const url = '/students';
        return axiosClient.get(url,{
            params
        });   
    },
    getById(id: string): Promise<students>{
        const url = `/students/${id}`;
        return axiosClient.get(url);
    },
    add(data: students): Promise<students>{
        const url = `/students`;
        return axiosClient.post(url,data);
    },
    update(data: students): Promise<students>{
        const url = `/students`;
        return axiosClient.patch(url);
    },
    remove(data: students): Promise<students>{
        const url = `/students`;
        return axiosClient.delete(url);
    },
}
export default studentApi