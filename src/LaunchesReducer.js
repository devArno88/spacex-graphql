import * as actions from "./actions";
import launchesInitialState from "./launchesInitialState";

const LaunchesReducer = (state = launchesInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.LAUNCH_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };

        case actions.LAUNCH_DATA_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default LaunchesReducer;
