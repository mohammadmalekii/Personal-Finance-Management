import React from "react";
import ChartPayment from "./ChartPayment";
import "./home.css";
import InfoTransaction from "./InfoTransaction";
const Home = () => {
  return (
    <>
      <InfoTransaction />
      <div className='chart-boxes'>
        <ChartPayment />
      </div>
    </>
  );
};

export default Home;
