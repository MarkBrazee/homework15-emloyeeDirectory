import React from "react";

function EmployeeList(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.occupation}</td>
      <td>{props.residence}</td>
    </tr>
  );
}

export default EmployeeList;
