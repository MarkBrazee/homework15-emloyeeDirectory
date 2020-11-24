import React from "react";
import Wrapper from "./components/Wrapper";
import Employees from "./employees.json";
import EmployeeList from "./components/EmployeeList";
import Title from "./components/Title";


function App() {
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

export default App;
