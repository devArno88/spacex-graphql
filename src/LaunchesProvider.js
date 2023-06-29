import React from "react";
import LaunchesReducer from "./LaunchesReducer";
import * as actions from "./actions";
import launchesInitialState from "./launchesInitialState";

const LaunchesContext = React.createContext();

export const useLaunches = () => React.useContext(LaunchesContext);

export const LaunchesProvider = ({ children }) => {
    const [state, setState] = React.useState(launchesInitialState);

    // Custom hook
    React.useEffect(() => {
        // API
        const api = "https://api.spacex.land/graphql/";

        // Define search query
        const query = `
        {
            launches {
              launch_date_local
              launch_site {
                site_name
              }
              launch_success
              launch_year
              mission_name
              rocket {
                rocket_name
                rocket_type
              }
              details
            }
        }`;

        // Fetch data
        fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            // Success
            .then((data) => {
                setState(
                    LaunchesReducer(launchesInitialState, {
                        type: actions.LAUNCH_DATA_SUCCESS,
                        payload: data.data.launches,
                    })
                );
            })
            // Failure
            .catch((err) => {
                setState(
                    LaunchesReducer(launchesInitialState, {
                        type: actions.LAUNCH_DATA_ERROR,
                        payload: err,
                    })
                );
            });
    }, []);

    return <LaunchesContext.Provider value={{ state, setState }}>{children}</LaunchesContext.Provider>;
};
