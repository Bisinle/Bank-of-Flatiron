import React from "react";
import { useState, useEffect } from "react";

export default function TransactionForm({ PostFormObjectToServer }) {
  const [FormObject, setFormObject] = useState({
    category: "",
    description: "",
    amount: "",
    date: "",
  });

  function FornObjectCreator(e) {
    const { name, value } = e.target;

    setFormObject((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    // console.log(FormObject);
    PostFormObjectToServer(FormObject);
    setFormObject({
      category: "",
      description: "",
      amount: "",
      date: "",
    });
  }
  return (
    <form onSubmit={formSubmit}>
      <fieldset>
        <div className="input-data">
          <input
            type="text"
            placeholder="category"
            className="inputs"
            name="category"
            value={FormObject.category}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="description"
            className="inputs"
            name="description"
            value={FormObject.description}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="number"
            placeholder="amount"
            className="inputs"
            name="amount"
            value={FormObject.amount}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="date"
            className="inputs"
            name="date"
            value={FormObject.date}
            onChange={FornObjectCreator}
            required
          />
        </div>

        <div className="btn-submit">
          <button className="submit">SUBMIT</button>
        </div>
      </fieldset>
    </form>
  );
}
