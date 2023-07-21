import React from "react";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";

function TransactionList({ transactions, onDeleteTransaction, searchInput }) {
  //   const { id, date, description, category, amount } = transactions;
  //   console.log(transactions);
  //   console.log(searchInput);

  function onEditTransaction(id) {
    console.log(id);
  }

  const transactionRow = transactions.map((transaction) => (
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

  console.log(transactions);

  const filteredTransactions = transactions
    .filter((currentTransaction) => {
      if (
        currentTransaction.description
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

  return (
    <div className="table-responsive table-div">
      <table className="table  table-theme">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
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
