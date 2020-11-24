import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Occupation</th>
          <th>Residence</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
