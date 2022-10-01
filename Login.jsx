import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";

function Login() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const { themes, currentTheme } = useContext(ThemeContext);
  const { isAuth, handleLogin } = useContext(AuthContext);

  const styles = currentTheme === "light" ? themes.light : themes.dark;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleClick = () => {
    handleLogin(userDetails);
  };

  const { email, password } = userDetails;
  return (
    <div style={styles}>
      <h1>Is User Logged In : {isAuth ? "YES" : "NO"}</h1>

      <input name="email" type="email" value={email} onChange={handleChange} />
      <input
        name="password"
        type="text"
        value={password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
}

export default Login;
