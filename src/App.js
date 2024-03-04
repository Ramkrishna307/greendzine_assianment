import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import EmployeeList from "./Pages/EmployeeList";
function App() {
  const employees = [
    {
      empId: 1,
      name: "John Doe",
      doj: "2022-01-15", // Date of Joining
      role: "Software Developer",
    },
    {
      empId: 2,
      name: "Jane Smith",
      doj: "2021-12-10",
      role: "Web Developer",
    },
    {
      empId: 3,
      name: "Alice Johnson",
      doj: "2023-02-20",
      role: "Data Scientist",
    },
    {
      empId: 4,
      name: "Ramkrishna Roy",
      doj: "2023-02-20",
      role: "Data Scientist",
    },
  ];

  return (
  <>
  <Routes>
 
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/home" element={<Home employees={employees} />}/>
    <Route path="/employeelist" element={<EmployeeList employees={employees}/>}/>
  </Routes>
  </>
  );
}

export default App;
