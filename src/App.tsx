import { useEffect, useState } from "react";
import "./App.css";
import EmployeeCard from "./Components/EmployeeCard";

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee)

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
    .then((response) => responde.json())
    .then((data) => {
      setEmployee(data.results[0]);
    });
  };

  return (
  
    <div className="App">
      <EmployeeCard employee={sampleEmployee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  
  );
}

export default App;
