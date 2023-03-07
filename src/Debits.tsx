
import Sidebar from "./Components/Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";
interface Debt {
  bank: string;
  amount: number | null;
  date: number;
}

const Debits: React.FC = () => {
  const [debts, setDebts] = useState<Debt[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5266/api/UserDebit")
      .then(response => {
        setDebts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="debts-info">
        <h2>Upcoming Debts</h2>
      </div>
      <div className="debts-container">
      
        <table>
          <thead>
            <tr>
              <th>Bank</th>
              <th>Amount</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {debts.map((debt, index) => (
              <tr key={index}>
                <td>{debt.bank}</td>
                <td>{debt.amount} TL</td>
                <td>{debt.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sidebar />
    </>
  );
};

export default Debits;
