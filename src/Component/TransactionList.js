import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
  //   const { id, date, description, category, amount } = transactions;
  console.log(transactions);
  return (
    <div className="table-responsive table-div">
      <table class="table  table-theme">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <Transaction
                id={transaction.id}
                category={transaction.category}
                description={transaction.description}
                amount={transaction.amount}
                date={transaction.date}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
/**
 *
 */

/**
 * 
    <div className="transaction-list">
      {" "}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Category</td>
            <td>Description</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
        </thead>
      </table>
    </div>
 */
