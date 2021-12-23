import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { selectExpense, selectIncome } from "../redux/transactionSlice";
import menuIcon from "../assets/menu.ico";
import walletIcon from "../assets/wallet.png";
import "./navBar.css";

const NavBar = ({ navbar, setNavbar }) => {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  let { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState("خانه");

  useEffect(() => {
    currentUrl();
  });

  function currentUrl() {
    switch (pathname) {
      case "/":
        setCurrentPage("خانه");
        break;
      case "/category":
        setCurrentPage("دسته‌بندی‌ها");
        break;
      case "/transaction":
        setCurrentPage("تراکنش‌ها");
        break;
      case "/save":
        setCurrentPage("پس‌انداز");
        break;
      case "/loan":
        setCurrentPage("اقساط");
        break;
      default:
        setCurrentPage("خانه");
    }
  }

  return (
    <header>
      <nav>
        <button className='btn-toggle' onClick={() => setNavbar(!navbar)}>
          <span>
            <img src={menuIcon} alt='menu-icon' />
          </span>
        </button>
        <div className='finance-info-container'>
          <img src={walletIcon} alt='wallet-icon' />
          <div className='finance-info'>
            <div
              className={`finance-price ${income - expense < 0 ? "minus" : ""}`}
            >
              {(income - expense).toLocaleString()} تومان
            </div>
          </div>
        </div>

        <div className='page-path-container'>
          <span className='page-path'>{currentPage}</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
