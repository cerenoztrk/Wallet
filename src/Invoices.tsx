import React from "react";
import Sidebar from "./Components/Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";

interface Invoce {
  invoiceId: number | null;
  bank: string;
  invoiceType: string;
  quantity: number | null;
  unit: number | null;
  total: number | null;
  
}

const Invoices: React.FC = () => {
  const [invoces, setinvoces] = useState<Invoce[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5266/api/UserInvoice")
      .then(response => {
        setinvoces(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>
      <div className="invoices-header" id="invoices">
        <h1>INVOICES</h1>

        <div className="invoices-container">
          <div className="content-amount">
            <div className="row">
              <div className="row-1">
                <table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Bank</th>
                      <th>Invoice type</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {invoces.map((invoce, index) => (
              <tr key={index}>
                <td>{invoce.invoiceId}</td>
                <td>{invoce.bank}</td>
                <td>{invoce.invoiceType} </td>
                <td>{invoce.quantity}</td>
                <td>{invoce.unit}$</td>
                <td>{invoce.total}$</td>
              </tr>
            ))}
                    {/* <tr>
                      <td>1</td>
                      <td>Akbank</td>
                      <td>Credit invoice</td>
                      <td>32</td>
                      <td>$75</td>
                      <td>$2152</td>
                    </tr> */}
                    {/* <tr>
                      <td>2</td>
                      <td>Garanti BBVA</td>
                      <td>Debit invoice</td>
                      <td>15</td>
                      <td>$169</td>
                      <td>$4169</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ziraat Bank</td>
                      <td>Interim invoice</td>
                      <td>69</td>
                      <td>$49</td>
                      <td>$1260</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>QNB Finansbank</td>
                      <td>Collective invoice</td>
                      <td>149</td>
                      <td>$12</td>
                      <td>$866</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Invoices;
