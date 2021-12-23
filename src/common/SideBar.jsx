import React from "react";
import "./sideBar.css";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.png";
import loanIcon from "../assets/loan.png";
import saveIcon from "../assets/save.png";
import transactionIcon from "../assets/transaction.png";

const SideBar = ({ navbar }) => {
  return (
    <aside className={navbar ? "aside-active" : ""}>
      <ul className='side-bar'>
        <li>
          <NavLink
            to='/'
            className={(navData) => (navData.isActive ? "active-link" : "link")}
          >
            <img src={homeIcon} alt='home-icon' />
            <p>خانه</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/transaction'
            className={(navData) => (navData.isActive ? "active-link" : "link")}
          >
            <img src={transactionIcon} alt='transaction' />
            <p>تراکنش‌ها</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/save'
            className={(navData) => (navData.isActive ? "active-link" : "link")}
          >
            <img src={saveIcon} alt={"save-icon"} />
            <p>پس‌انداز</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/loan'
            className={(navData) => (navData.isActive ? "active-link" : "link")}
          >
            <img src={loanIcon} alt='loan-icon' />
            <p>اقساط</p>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
