import React from 'react';
import Button from 'react-bootstrap/Button'
import SearchPage from './Search'
import LayerBus from '../Buses/LayerBus';

const SideNav = ({ paradas }) => {
    return (

        <nav id="sidebar">
            <div className="bg-primary sidebar-header">
                <h3>ViBus</h3>
            </div>
            {/* Print all paradas.lineas */
                paradas.map()
            }
            <SearchPage />
            <LayerBus busName="Circular Centro" busAbrev="C1" />
            <LayerBus busName="Lanzadeira á Universidade (por Clara Campoamor) " busAbrev="U1" />
            {/* <ul className="list-unstyled components">

                <li><a href="#">About</a></li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
        </nav >
    );
}; export default SideNav; 