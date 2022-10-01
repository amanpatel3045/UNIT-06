import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";



function Dashboard() {
    const { themes, currentTheme, toggleTheme } = useContext(ThemeContext);
  
    const styles = currentTheme === "light" ? themes.light : themes.dark;
  
    const buttonStyles =
      currentTheme === "light"
        ? { ...themes.light, padding: "10px" }
        : { ...themes.dark, padding: "10px" };
    return (
      <div style={styles}>
        {/* <h1>Hello PT WEB 6</h1>
        <button onClick={toggleTheme} style={buttonStyles}> */}
        {/* Toggle Theme
        </button> */}
      </div>
    );
  }
  
  export default Dashboard;
  
