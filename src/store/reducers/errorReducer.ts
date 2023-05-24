import { ERROR } from "../type";
import { errorAction } from "../interface";

const initialState = {
    error: "",
};

export const errorReducer = (state = initialState, { type, payload }: errorAction) => {
    switch (type) {
        case ERROR: {
            return {
                ...state,
                error: payload,
            };
        }

        default: {
            return state;
        }
    }
};
