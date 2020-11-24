import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Employees from "./employees.json";
import EmployeeList from "./components/EmployeeList";
import Title from "./components/Title";

// Setting this.state.employees to employees json array
class App extends Component {
  state = {
    Employees
  };


  filterEmployee = id => {
    
  }



  // Map over this.state.friends and render a Employee component for each employee object
  App() {
    return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {Employees.map(employee => (
        <EmployeeList
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            phone={employee.phone}
            occupation={employee.occupation}
            residence={employee.residence}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
