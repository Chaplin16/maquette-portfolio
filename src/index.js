import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Container from "./components/container/Container";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

export default App;
