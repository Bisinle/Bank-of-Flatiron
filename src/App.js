import React from "react";
import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { createContext } from "react";
import TransactionList from "./Component/TransactionList";
import Styles from "./Component/styles/Styles.css";
import TransactionForm from "./Component/TransactionForm";
import SearchBar from "./Component/SearchBar";

export const themeContext = createContext(null);
function App() {
  const [transactions, setTransactions] = useState([]);
  const [watchedByEffect, setWatchedByEffect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [theme, setTheme] = useState("light");
  const [bodyBgc, setBodyBgc] = useState({ theme: "light" });

  //
  //
  //*********************************************************** */
  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
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
  function toggleSwitchHnadler() {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
  const btnText = showForm ? "close Form " : "Add Transaction";

  return (
    <themeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <h1>KONOHA BANK</h1>
        <div className="nav">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <button className="add-form" onClick={addTransaction}>
            {btnText}
          </button>
          <div className="Switch">
            <ReactSwitch
              className="react-switch"
              onChange={toggleSwitchHnadler}
              checked={theme === "dark"}
            />
          </div>
        </div>

        {showForm && (
          <TransactionForm PostFormObjectToServer={PostFormObjectToServer} />
        )}
        <TransactionList
          searchInput={searchInput}
          transactions={transactions}
          onDeleteTransaction={onDeleteTransaction}
        />
      </div>
    </themeContext.Provider>
  );
}

export default App;
