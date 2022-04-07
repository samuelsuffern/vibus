import React from "react";
import Badge from "react-bootstrap/Badge";
import { MDBCol, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

/** Creates icon of bus with the bus abrev */
const LayerBus = ({busAbrev,busName}) => {
    return (
        <div className="lineBus border">

            <div className="col-12">
                <form className="form-inline mt-4 mb-4 ml-0">
                    <div >
                        <div className="border p-1 font-weight-bold">
                        <Badge bg="secondary"><MDBIcon icon="bus"/></Badge> {busAbrev}

                        </div>
                        
                    </div>
                    <div className="pl-3 font-weight-bold font-size-10">
                        {busName}
                    </div>
                </form>
            </div>

        </div>
    );
}
export default LayerBus;