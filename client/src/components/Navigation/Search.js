import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
    return (
        <div className="border row">
            <div className="col-sm-1 pt-4 pr-0" >
                    <MDBIcon icon="search" />
            </div>
            <div className="col-sm-11 pl-0">
                <form className="form-inline mt-4 mb-4 ">
                    <input className="form-control w-100" type="text" placeholder="Search" aria-label="Search" />
                </form>

            </div>

        </div>
    );
}

export default SearchPage;