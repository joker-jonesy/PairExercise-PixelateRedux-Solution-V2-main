import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pickColor } from "../stateSlice";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
];

export default () => {
  const dispatch = useDispatch();
  const { selectedColor } = useSelector((state) => state.stateValues);

  function handleColorChange(evt) {
    dispatch(pickColor(evt.target.value));
  }

  return (
    <select onChange={handleColorChange} value={selectedColor}>
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};
