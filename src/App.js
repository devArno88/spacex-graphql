import React from "react";
import "./styles.css";
import Launches from "./Launches";
import { LaunchesProvider } from "./LaunchesProvider";

const App = () => {
  return (
    <div className="App">
      <LaunchesProvider>
        <Launches />
      </LaunchesProvider>
    </div>
  );
};

export default App;
