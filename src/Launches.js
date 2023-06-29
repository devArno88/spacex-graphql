import React from "react";
import LaunchItem from "./LaunchItem";
import { useLaunches } from "./LaunchesProvider";

const Launches = () => {
    // Use context
    const { state, setState } = useLaunches();

    // Sort data by launch_date_local
    const sortData = (e) => {
        e.preventDefault();
        const sortedData = state.data.sort((a, b) => new Date(b.launch_date_local) - new Date(a.launch_date_local));
        setState({ ...state, data: sortedData });
    };

    return (
        <React.Fragment>
            <div className="header">
                <h1>SpaceX Launches</h1>

                {/* Status */}
                <small style={{ color: state.loading ? "red" : "green" }}>
                    Fetch Status: {state.loading ? "Loading" : "Complete"}
                </small>

                <h2>{JSON.stringify(state)}</h2>

                {/* Error */}
                <small
                    style={{
                        color: JSON.stringify(state.error) === "{}" ? "green" : "red",
                    }}
                >
                    Error:
                    {JSON.stringify(state.error) === "{}" ? " None" : JSON.stringify(state.error)}
                </small>

                {/* Sort button */}
                {!state.loading && JSON.stringify(state.error) === "{}" && state.data ? (
                    <button onClick={sortData}>Sort</button>
                ) : null}
            </div>

            {/* Data */}
            {state.data && !state.loading
                ? state.data.map((launch, key) => <LaunchItem launch={launch} key={key} />)
                : null}
        </React.Fragment>
    );
};

export default Launches;
