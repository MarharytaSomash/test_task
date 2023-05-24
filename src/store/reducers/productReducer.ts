import { GET_DATA } from "../type";
import { GetData, Product } from "../interface";

const initialState = { products: [] };

export const productReducer = (state = initialState, { type, payload }: GetData) => {
    console.log(payload);
    switch (type) {
        case GET_DATA: {
            return payload;
        }
        default: {
            return state;
        }
    }
};
