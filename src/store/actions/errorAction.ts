import { errorAction } from "../interface";
import { ERROR } from "../type";

export const Error = (error: string): errorAction => ({
    type: ERROR,
    payload: error,
});
