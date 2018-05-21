import React from "react";
import { Currency } from "./currency";
import { Transfer } from "./transfer";

export function Filter() {
  return (
    <div className="filter">
      <div className="filter__currency">
        <Currency />
      </div>
      <div className="filter__transfer">
        <Transfer />
      </div>
    </div>
  );
}
