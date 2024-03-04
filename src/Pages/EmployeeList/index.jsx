import React, { useState } from "react";
import "./style.css";
import EmpCard from "../../Component/EmpCard";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Logo from "../../Component/Logo";
import Input from "../../Component/Input";
const EmployeeList = ({employees}) => {

  const[search,setSearch]=useState("");
  
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filterEmp = employees.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (<>
    <Header />
    <div className="emp-list">
    
      <Logo value={employees.length} />
      <Input search={search} onSearchChange={onSearchChange} />
      <div className="list-container">
        {filterEmp.map((employee) => (
        
          <EmpCard key={employee.empId} empDetails={employee} />
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default EmployeeList;
