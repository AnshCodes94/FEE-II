import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export function SignUp() {
  const usernameRef = useRef(null);
  const mobileRef = useRef(null);
  const passwordRef1 = useRef(null);
  const passwordRef2 = useRef(null);

  // const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract current values from the refs
    const username = usernameRef.current.value.trim();
    const mobile = mobileRef.current.value.trim();
    const password1 = passwordRef1.current.value;
    const password2 = passwordRef2.current.value;

    // Basic Validation
    if (!username || !mobile || !password1 || !password2) {
      toast.error("All fields are required.");
      return;
    }
    if (password1 !== password2) {
      toast.error("password mismatch");
      password2.current.focus();
      return;
    }
    if (password1.length < 4) {
      toast.error("password too short");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("password", password1);
    console.log("Submitted Data:", { username, mobile, password1 });
    e.target.reset();
    toast.success("Registered Successfully");
    navigate("/signin");
  };
  return (
    <div className="h95 bgr fyc">
      <form
        onSubmit={handleSubmit}
        className="w15 b1 p3 fy sh1"
        style={{ borderRadius: "5px" }}
      >
        <h2 style={{ textAlign: "center" }}>SignUp</h2>
        <div className="mt1">
          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
          />
        </div>
        <div>
          <input
            id="mobile"
            type="text"
            ref={mobileRef}
            placeholder="Enter Mobile Number"
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            ref={passwordRef1}
            placeholder="Enter Password "
            maxLength={8}
          />
        </div>
        <div>
          <input
            id="confirmPassword"
            type="password"
            ref={passwordRef2}
            placeholder="Confirm password"
            maxLength={8}
          />
        </div>
        {/* <div className="bh1" style={{ color: "orange" }}>
          {message}
        </div> */}
        <button type="submit" className="btn2 bg50 fss">
          Register
        </button>
        <p style={{ fontSize: "10px" }}>
          Already have an account?
          <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}