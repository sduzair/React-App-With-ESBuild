// const { createRoot } = require("react-dom/cjs/react-dom.production.min");
// const { default: App } = require("./App");

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App></App>);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App></App>);