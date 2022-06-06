import {lazy} from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");
const Home = lazy(() => import('./home'));

const App = () => (
   <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
);

export default App;
