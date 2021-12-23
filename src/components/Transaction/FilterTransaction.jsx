import React from "react";
import filterIcon from "../../assets/filter.png";
const FilterTransaction = ({ setFilterModal }) => {
  return (
    <div className='filter-transaction' onClick={setFilterModal}>
      <img src={filterIcon} alt='filter-icon' />
    </div>
  );
};

export default FilterTransaction;
