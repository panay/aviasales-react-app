import React from "react";
import './style.scss';

export function Currency() {
  return (
    <div className="currency-filter">
      <div className="currency-filter__title">Валюта</div>
      <form className="currency-filter__form">
        <div className="custom-radio">
          <input type="radio" id="rub" value="rub" name="currency" />
          <label htmlFor="rub">Rub</label>
        </div>
        <div className="custom-radio">
          <input type="radio" id="usd" value="usd" name="currency" />
          <label htmlFor="usd">Usd</label>
        </div>
        <div className="custom-radio">
          <input type="radio" id="eur" value="eur" name="currency" />
          <label htmlFor="eur">Eur</label>
        </div>
      </form>
    </div>
  );
}