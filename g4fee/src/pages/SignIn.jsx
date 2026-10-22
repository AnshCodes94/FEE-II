import { useRef, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignIn() {
  const login = useAuthStore((state) => state.login);
  const [userName, setUserName] = useState("Guest");
  const navigate = useNavigate();

  const mobileRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();

    const mobile = mobileRef.current.value;
    const password = passwordRef.current.value;

    if (!mobile.trim() || !password.trim()) {
      toast.error("Please enter both mobile number and password");
      return;
    }

    const storedMobile = localStorage.getItem("mobile");
    const storedPassword = localStorage.getItem("password");
    const userName = localStorage.getItem("username");

    if (mobile === storedMobile && password === storedPassword) {
      login(userName); // Change global login state to true
      toast.success("Login Successful.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="h95 bgr fxc">
      <div className="w15 b1 bg0 p3 sh1">
        <h2 className="mb2">Login </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb2">
            <input
              type="mobile"
              ref={mobileRef}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb1">
            <input
              type="password"
              ref={passwordRef}
              placeholder="password"
              required
            />
          </div>

          {/* <p className="bh1" style={{ color: "orange", margin: "0 0 10px 0" }}>
            {errorMessage}
          </p> */}

          <button className="btn2 fss bg50 mt1" type="submit">
            Sign In
          </button>
        </form>
        <p style={{ fontSize: "10px" }}>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}