import React from "react";
import { formatDate } from "./utils";

const LaunchItem = ({ launch }) => {
    return (
        <div className="launch__item">
            <h2>{launch.mission_name}</h2>
            <p className="launch__itemText">
                <strong>Site</strong>: {launch.launch_site.site_name}
            </p>

            <p className="launch__itemText">
                <strong>Date</strong>: {formatDate(launch.launch_date_local)}
            </p>

            <p className="launch__itemText">
                <strong>Success</strong>:{launch.launch_success ? " True" : " False"}
            </p>

            <p className="launch__itemText">
                <strong>Year</strong>: {launch.launch_year}
            </p>

            <p className="launch__itemText">
                <strong>Rocket Name</strong>: {launch.rocket.rocket_name}
            </p>

            <p className="launch__itemText">
                <strong>Rocket Type</strong>: {launch.rocket.rocket_type}
            </p>

            {launch.details ? (
                <p className="launch__itemText" style={{ textAlign: "left" }}>
                    <strong>Details</strong>: {launch.details}
                </p>
            ) : null}
        </div>
    );
};

export default LaunchItem;
