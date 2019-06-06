import React from "react";
import "../css/home.css";

const Table = ({ children }) => (
  <table className="main-table">
    <tbody>{children}</tbody>
  </table>
);

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableCol = ({ children, colHeader = false }) =>
  !colHeader ? (
    <td className="main-table-text">{children}</td>
  ) : (
    <th className="main-table-header">{children}</th>
  );

export { Table, TableRow, TableCol };
