import React from "react";
import { useState, useEffect } from "react";
import TransactionList from "./Component/TransactionList";
import Styles from "./Component/styles/Styles.css";
function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`  http://localhost:3000/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>KONOHA BANK</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
