import React, { Component } from "react";
import store from "../util/store";
import Button from "../Button";

export const opHandler = type => {
  store.newExpression = `${store.curExpression} ${type} `;
};

export const calculateExpression = () => {
  const calcFunc = eval;

  try {
    store.newExpression = calcFunc(store.curExpression);
  } catch (e) {
    console.error("Error: Incorrect Expression of digits & operators :(");
  }
};

export const Operators = () => (
  <section className="buttons--operators">
    {["+", "-", "*", "/"].map((op, i) => (
      <Button key={i} text={op} clickHandler={opHandler} />
    ))}

    <Button text="=" clickHandler={calculateExpression} />
  </section>
);

export default Operators;
