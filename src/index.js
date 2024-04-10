import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Forecast">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/Omolwethu/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open Source Code
        </a>{" "}
        by Olwethu Zulu (Omolwethu)💜
      </p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
