import {lazy} from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");
const Home = lazy(() => import('./home'));

const App = () => (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
);

export default App;
