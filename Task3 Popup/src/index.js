import React from "react";
import ReactDOM from "react-dom";

import "./Styles.css";
import ImageComponent from "./imageComponents";

function App() {
  return (
    <div className="App">
      <h1>HUSKY</h1>
      <h2>SIBERIAN HUSKY DOG BREED </h2>
      <ImageComponent />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

