import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TableRow from './TableRow.js';

export default () => {
  const { grid } = useSelector((state) => state.stateValues);
  return (
    <table>
      <tbody>
        {grid.map((row, rowIdx) => (
          <TableRow key={uuidv4()} rowIdx={rowIdx} row={row} />
        ))}
      </tbody>
    </table>
  );
};
