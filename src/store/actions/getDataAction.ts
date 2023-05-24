import { GetData } from "../interface";
import { GET_DATA } from "../type";

export const getDataAction = (data: object): GetData => {
    return {
        type: GET_DATA,
        payload: data,
    };
};
