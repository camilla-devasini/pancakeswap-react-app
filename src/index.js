import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ColorThemeContext";
import "./assets/style/Index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { UserContext } from "./context/AccountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
