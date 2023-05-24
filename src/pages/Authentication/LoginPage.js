import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
     {/* When the form is submitted we want to fire off the loginuser function */}
    event.preventDefault();
    loginUser(event)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage