import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import HomeNavBar from "./components/Navs/HomeNavBar";
import HomeFooter from "./components/footer/HomeFooter";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

function App() {

  

  return (
    <>
      <Provider store={store}>
        <HomeNavBar />
        <Outlet/>
        <HomeFooter />
      </Provider>

          
    </>
  )
}

export default App
