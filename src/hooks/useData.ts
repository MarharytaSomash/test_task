import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getDataAction } from "../store/actions/getDataAction";

export const useData = () => {
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}`;
            const headers = {
                "Content-Type": "application/json",
            };
            const response = await axios.get(
                "https://voodoo-sandbox.myshopify.com/products.json?limit=12",
            );

            if (response.status === 200) {
                const data = response.data;
                console.log(data);
                dispatch(getDataAction(data));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { getData };
};

export default useData;
