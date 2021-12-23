import React, { useState } from "react";
import SideBar from "./common/SideBar";
import Home from "./components/Home/Home";
import Transaction from "./components/Transaction/Transaction";
import Save from "./components/Save/Save";
import Loan from "./components/Loan/Loan";
import NavBar from "./common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Router>
      <NavBar navbar={navbar} setNavbar={setNavbar} />
      <SideBar navbar={navbar} />
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/transaction' exact element={<Transaction />} />
          <Route path='/save' exact element={<Save />} />
          <Route path='/loan' exact element={<Loan />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
