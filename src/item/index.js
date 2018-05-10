import React from "react";
import "./style.scss";
import logo from "../assets/svg/example_logo.svg";
import airplane from "../assets/svg/airplane.svg";

export function Item({ price }) {
  return (
    <div className="item">
      <div className="item__logo">
        <svg>
          <use xlinkHref="#example_logo" />
        </svg>
        <a href="#buy" className="btn">
          Купить за {price}
        </a>
      </div>
      <div className="item__data">
        <div className="route">
          <div className="route__time">9:25</div>
          <div className="route__airport">VVO, Владивосток</div>
          <div className="route__date">9 окт 2018, Пт</div>
        </div>
        <div className="transfer">
          <div className="transfer__count">1</div>Пересадка
          <div className="transfer__line">
            <svg>
              <use xlinkHref="#airplane" />
            </svg>
          </div>
        </div>
        <div className="route">
          <div className="route__time">11:45</div>
          <div className="route__airport">Тель-Авив, TLV</div>
          <div className="route__date">10 окт 2018, Cб</div>
        </div>
      </div>
    </div>
  );
}
