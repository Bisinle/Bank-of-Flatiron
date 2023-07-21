import React from "react";

function Transaction({ id, amount, description, category, date }) {
  console.log(id, amount, description, category, date);
  return (
    <>
      <td>{id}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </>
  );
}

export default Transaction;
