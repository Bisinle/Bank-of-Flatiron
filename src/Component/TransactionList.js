import React from "react";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";
import { themeContext } from "../App";
import { useContext } from "react";

function TransactionList({ transactions, onDeleteTransaction, searchInput }) {
  //   const { id, date, description, category, amount } = transactions;
  //   console.log(transactions);
  //   console.log(searchInput);
  const themeFromApp = useContext(themeContext);
  const [transactionState, setTransactionState] = useState([]);
  const [sortedCategoryState, setSortedCategoryState] = useState([]);
  const [sortedDescriptionState, setSortedDescriptionState] = useState([]);
  const [sortedWatchedState, setSortedWatchedState] = useState(true);
  const [sortedAmountState, setSortedAmountState] = useState([]);
  // const [categoryDescriptioState, setCategoryDescriptionState] = useState("");
  useEffect(() => {
    setTransactionState(transactions);
  }, [transactions]);

  // useEffect(() => {
  //   setTransactionState(sortedCategoryState);
  // }, [sortedCategoryState, sortedWatchedState]);

  // useEffect(() => {
  //   setTransactionState(sortedDescriptionState);
  // }, [sortedDescriptionState, sortedWatchedState]);

  // useEffect(() => {
  //   setTransactionState(sortedAmountState);
  // }, [sortedAmountState, sortedWatchedState]);

  function onEditTransaction(id) {
    console.log(id);
  }

  const transactionRow = transactionState.map((transaction) => (
    <tr className="sent-tr" key={transaction.id}>
      <Transaction
        onDeleteTransaction={onDeleteTransaction}
        onEditTransaction={onEditTransaction}
        id={transaction.id}
        category={transaction.category}
        description={transaction.description}
        amount={transaction.amount}
        date={transaction.date}
      />
    </tr>
  ));

  // console.log(transactions);

  const filteredTransactions = transactionState
    .filter((currentTransaction) => {
      if (
        currentTransaction.description
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        currentTransaction.category
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      ) {
        return currentTransaction;
      }
    })
    .map((transaction) => {
      return (
        <tr className="sent-tr" key={transaction.id}>
          <Transaction
            onDeleteTransaction={onDeleteTransaction}
            onEditTransaction={onEditTransaction}
            id={transaction.id}
            category={transaction.category}
            description={transaction.description}
            amount={transaction.amount}
            date={transaction.date}
          />
        </tr>
      );
    });

  function sortByAmount(transactions) {
    // console.log(transactions);
    let sorted = transactions.sort((a, b) => {
      return b.amount - a.amount;
    });

    // console.log(categoryDescriptionState);
    setSortedWatchedState(!sortedWatchedState);
    // setSortedAmountState(sorted);
    return sorted;
  }
  function sortByCategory(transactions) {
    // console.log(transactions);
    let sorted = transactions.sort((a, b) => {
      return a.category.localeCompare(b.category);
    });

    console.log(sorted);
    setSortedWatchedState(!sortedWatchedState);
    // setSortedCategoryState(sorted);
    return sorted;
  }

  function sortByDescription(transactions) {
    // console.log(transactions);
    let sorted = transactions.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });

    // console.log(categoryDescriptionState);
    setSortedWatchedState(!sortedWatchedState);
    // setSortedDescriptionState(sorted);
    return sorted;
  }

  return (
    <div className="table-responsive table-div" id={themeFromApp}>
      <table className="table  table-theme">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">
              <select
                id="category-sort"
                onClick={() => {
                  sortByCategory(transactionState);
                }}
              >
                <option value="Category">Category</option>
              </select>
            </th>
            <th scope="col">
              <select
                id="category-sort"
                onClick={() => {
                  sortByDescription(transactionState);
                }}
              >
                <option value="Category">Description</option>
              </select>
            </th>
            <th scope="col">
              <select
                id="category-sort"
                onClick={() => {
                  sortByAmount(transactionState);
                }}
              >
                <option value="Category">Amount</option>
              </select>
            </th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>

        <tbody>
          {searchInput === "" ? transactionRow : filteredTransactions}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
