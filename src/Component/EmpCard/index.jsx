import React from "react";
import "./style.css";
const EmpCard = ({ empDetails }) => {
  const { empId, name, doj, role } = empDetails;
  return (
    <div>
      <div className="card-container">
        <div className="count" style={{ color: "white" }}>
          {empId}
        </div>
        <p>
          EMP ID{" "}
          <span style={{ marginLeft: "10px", color: "white" }}>
            {" "}
            :<span style={{ marginLeft: "10px", color: "white" }}></span>
            {empId}
          </span>
        </p>
        <p>
          Name{" "}
          <span style={{ marginLeft: "10px", color: "white" }}>
            {" "}
            :<span style={{ marginLeft: "10px", color: "white" }}></span>
            {name}
          </span>
        </p>
        <p>
          DOJ{" "}
          <span style={{ marginLeft: "10px", color: "orange" }}>
            {" "}
            :<span style={{ marginLeft: "10px", color: "orange" }}></span>
            {doj}
          </span>
        </p>
        <p>
          Role{" "}
          <span style={{ marginLeft: "10px", color: "green" }}>
            {" "}
            :<span style={{ marginLeft: "10px", color: "green" }}></span>
            {role}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmpCard;
