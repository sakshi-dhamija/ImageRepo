import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app.jsx";
import store from "./app/mainPage/Navbar/store.js";
import "./style.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
<App />
        </Provider>
    </React.StrictMode>,


document.getElementById("root"));
