import React from "react";
import Sidebar from "./Components/Sidebar";

const Wallet: React.FC = () => {
  return (
    <>
      <div className="form-container" id="wallet">
        <div className="portlet-body-form">
          <form role="form" className="form-horizontal">
            <h1>Fill the form to load money</h1>
            <div className="form-body">
              <div className="form-line-input">
                <label className="control-label" htmlFor="txtName">
                  Enter your balance*
                </label>
                <div className="col-md-10">
                  <input
                    pattern="\d*"
                    required
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="txtName"
                    name="txtName"
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="form-line-input">
                <label className="control-label" htmlFor="cmbCity">
                  Select Bank
                </label>
                <div className="col-md-10">
                  <select className="form-control" id="cmbCity" name="cmbCity">
                    <option>Please choose..</option>
                    <option value="Akbank">Akbank </option>
                    <option value="Garanti">Garanti BBVA</option>
                    <option value="Ziraat">Ziraat Bank</option>
                    <option value="Finansbank">QNB Finansbank</option>
                  </select>
                  <div className="form-control-focus"></div>
                </div>
              </div>
              <div className="form-line-input">
                <label className="control-label" htmlFor="dtBirthDate">
                  Enter Date
                </label>
                <div className="col-md-10">
                  <input
                    type="date"
                    id="form_control_1"
                    placeholder="GG/AA/YYYY"
                    
                    min="2000-01-01" max="2023-12-31"
                  />
                  <div className="form-control-focus"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <button className="loadbtn" type="submit">
                Load Money
              </button>
            </div>
          </form>
        </div> 
      </div>
      <Sidebar />
    </>
  );
};

export default Wallet;
