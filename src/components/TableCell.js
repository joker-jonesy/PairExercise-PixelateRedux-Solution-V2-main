import React from "react";
import { useDispatch } from "react-redux";
import { colorize } from "../stateSlice";

const TableCell = ({ rowIdx, colIdx, color }) => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(colorize({ row: rowIdx, column: colIdx }));
  }

  return <td onClick={handleClick} className={color}></td>;
};

export default TableCell;
