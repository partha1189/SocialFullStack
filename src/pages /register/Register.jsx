import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It was popularised in the 1960s with the release of
            Letraset sheets containing.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email" />
            <input type="password" name="" placeholder="Password" />
            <input type="text" name="" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
