import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import AdminNavbar from "../components/AdminNavbar";
import AppBar from "../components/AppBar";


const HistoryPage = () => {
  return (
    <div>
      <AppBar />
      <div classNameName="hcontainer-fluid my-5  d-flex  justify-content-center">
        <div className="card ">
          <div className="card-header bg-white">
            <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
              <div className="col-auto text-center  my-auto pl-0 pt-sm-4">
                <img
                  className="img-fluid my-auto align-items-center mb-0 pt-3"
                  src="https://www.dominos.co.in/files/items/updated_achari_do_pyaza.webp"
                  width="115"
                  height="115"
                />
                <p className="mb-4 pt-0 Glasses">Order history</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="card card-2">
                  <div className="card-body">
                    <div className="media">
                      <div className="sq align-self-center ">
                        <img
                          className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                          src="https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
                          width="135"
                          height="135"
                        />
                      </div>
                      <div className="media-body my-auto text-right">
                        <div className="row  my-auto flex-column flex-md-row">
                          <div className="col my-auto">
                            <h6 className="mb-0"> Pizza</h6>
                          </div>
                          <div className="col-auto my-auto">
                            <small>Maxican Green Wave </small>
                          </div>
                          <div className="col my-auto">
                            <small>Size : M</small>
                          </div>
                          <div className="col my-auto">
                            <small>Qty : 1</small>
                          </div>
                          <div className="col my-auto">
                            <h6 className="mb-0">&#8377;200.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3 " />
                    <div className="row">
                      <div className="col mt-auto">
                        <ProgressBar now={100} />
                        <div className="media row justify-content-between ">
                          <div className="col-auto text-right">
                            <span>
                              <small className="text-right mr-sm-2"></small>
                              <i className="fa fa-circle active"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
