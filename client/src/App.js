import React from "react";
import './App.css';
import './style/Navigation/Sidebar.css';
// import './style/Navigation/Containers.css';
import MyMap from './components/MyMap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LNavbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
function App2() {
  return (
    <div className="containerxx flex-direction">
      {/* <LNavbar title="Mapa de Paradas" /> */}

      <Sidebar></Sidebar>

      <div id="two">

      </div>
      {/* <div id="two">
          <MyMap className='leaflet-container' />

        </div> */}
    </div>

  );
}

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="p-1 col-sm-3 one">
          <div className="">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="p-3 col-sm-8 w-75 two">
          <MyMap />
        </div>
      </div>
    </div>

  );
}

export default App;
