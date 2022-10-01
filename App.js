import { useContext } from "react";
import "./styles.css";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

export default function App() {
  return (
    <div className="App">
      <Login />
      <Dashboard />
    </div>
  );
}