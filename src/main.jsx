import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

axios.defaults.baseURL = "http://ec2-54-180-133-112.ap-northeast-2.compute.amazonaws.com:8080";
axios.defaults.withCredentials = true;
