import * as React from "react";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

const App = () => (
  <div className="app">
    <img src={reactLogo.default} height="480" />
  </div>
);

export default App;
