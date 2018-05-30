import React, { Component } from "react";
import store from "../util/store";
import Button from "../Button";

export const Digits = () => (
  <section className="buttons--digits">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(nr => (
      <Button key={nr} text={nr} clickHandler={digitClickHandler} />
    ))}
  </section>
);

export const digitClickHandler = num =>
  !store.curExpression
    ? (store.newExpression = num)
    : (store.newExpression = `${store.curExpression}${num}`);

export default Digits;
