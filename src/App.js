import React from "react";
import { useState, useEffect } from "react";
import TransactionList from "./Component/TransactionList";
import Styles from "./Component/styles/Styles.css";
import TransactionForm from "./Component/TransactionForm";
import SearchBar from "./Component/SearchBar";
function App() {
  const [transactions, setTransactions] = useState([]);
  const [watchedByEffect, setWatchedByEffect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  //
  //
  //*********************************************************** */
  useEffect(() => {
    fetch(`  http://localhost:3000/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, [watchedByEffect]);
  //
  //
  //
  //****************************************
  //
  function addTransaction() {
    setShowForm(!showForm);
  }
  const btnText = showForm ? "close Form " : "Add Transaction";
  return (
    <div className="App">
      <h1>KONOHA BANK</h1>

      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <button className="add-form" onClick={addTransaction}>
        {btnText}
      </button>
      {showForm && (
        <TransactionForm PostFormObjectToServer={PostFormObjectToServer} />
      )}
      <TransactionList
      searchInput={searchInput}
        transactions={transactions}
        onDeleteTransaction={onDeleteTransaction}
      />
    </div>
  );
}

export default App;
