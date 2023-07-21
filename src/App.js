import React from "react";
import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { createContext } from "react";
import TransactionList from "./Component/TransactionList";
import Styles from "./Component/styles/Styles.css";
import TransactionForm from "./Component/TransactionForm";
import SearchBar from "./Component/SearchBar";

const themeContext = createContext(null);
function App() {
  const [transactions, setTransactions] = useState([]);
  const [watchedByEffect, setWatchedByEffect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [theme, setTheme] = useState("light");

  //
  //
  //*********************************************************** */
  useEffect(() => {
    fetch(`  http://localhost:3000/transactions`)
      .then((res) => {
        if (res.ok) {
          console.log("RESPONSE Ok");
        } else {
          console.log("Not OK");
        }
        return res.json();
      })
      .then((data) => setTransactions(data));
  }, [watchedByEffect]);
  // console.log(transactions);
  //
  //
  //
  //************************************************************ */
  function onDeleteTransaction(id) {
    console.log(id);
    setWatchedByEffect(!watchedByEffect);
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /*********************************************** */
  function PostFormObjectToServer(formObject) {
    console.log(formObject);
    setWatchedByEffect(!watchedByEffect);
    fetch(`http://localhost:3000/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });

    // .then((res) => res.json())
    // .then((data) => setWatchedByEffect(!));
  }
  //************************************************************ */
  //
  //
  //
  function addTransaction() {
    setShowForm(!showForm);
  }
  const btnText = showForm ? "close Form " : "Add Transaction";
  function toggleSwitchHnadler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="App" id={theme}>
      <h1>KONOHA BANK</h1>
      <div className="Switch">

      <ReactSwitch className="react-switch" onChange={toggleSwitchHnadler} checked={theme === "dark"} />
      </div>

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
