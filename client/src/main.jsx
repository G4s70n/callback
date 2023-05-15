import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import { Auth0Provider } from "@auth0/auth0-react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import axios from 'axios';
import { HashRouter } from "react-router-dom"; // M

const domain =import.meta.env.VITE_AUTH0_DOMAIN;
const clientId =import.meta.env.VITE_AUTHO_CLIENT_ID;



/* axios.defaults.baseURL="http://localhost:3001"; */
axios.defaults.baseURL="https://poke-back.up.railway.app/";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider 
  domain={domain} 
  clientId={clientId} 
  authorizationParams={{
    redirect_uri: "https://g4s70n.github.io/poke/#/home"
    }}
  >
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </Provider>
  </Auth0Provider>
);
