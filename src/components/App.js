import React from "react";
import { useDispatch } from "react-redux";
import { addRow } from "../stateSlice.js";
import Table from "./Table.js";
import ColorSelector from "./ColorSelector.js";

const App = () => {
  const dispatch = useDispatch();

  function handleAddRowClick() {
    dispatch(addRow());
  }

  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button id="add-row" onClick={handleAddRowClick}>
          Add a row
        </button>
        <ColorSelector />
      </div>
      <Table />
    </div>
  );
};

export default App;
