import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Portfolio from "./pages/Portfolio";
import Layout from "./layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
