import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/style/scss/import.scss";
import ReactDOM from "react-dom/client";
// import { AuthProvider } from "./auth/AuthProvider";
import { App } from "@/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<AuthProvider>*/}
    <App />
    {/*</AuthProvider>*/}
  </React.StrictMode>
);
