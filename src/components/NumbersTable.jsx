import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="numbers-table">
      <table className="table">
        <tbody>
          <tr>
            {numbers.map((number) => (
              <td key={number} className={number % 2 === 0 ? 'even' : 'odd'}>
                {number}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumbersTable;
