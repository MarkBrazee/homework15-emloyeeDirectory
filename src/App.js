import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import EmployeeList from "./components/EmployeeList";
import Title from "./components/Title";
import "./App.css";
import Table from "./components/Table";

// Map over this.state.friends and render a Employee component for each employee object
function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Table>
        {employees.map((employee) => (
          <EmployeeList
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            phone={employee.phone}
            occupation={employee.occupation}
            residence={employee.residence}
          />
        ))}
      </Table>
    </Wrapper>
  );
}

export default App;
