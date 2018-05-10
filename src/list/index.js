import React from "react";
import { Item } from "../item";

export function List() {
  return (
    <div className="list">
      {[...Array(5)].map((x, i) => <Item key={i}/>)}
    </div>
  );
}
