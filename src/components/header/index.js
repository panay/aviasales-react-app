import React from "react";

import "./style.scss";
import logo from "../../assets/svg/logo.svg";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <svg>
          <use xlinkHref="#logo" />
        </svg>
      </div>
    </header>
  );
}
