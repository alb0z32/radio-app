import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../helpers/context";
const Register = () => {
  const {
    isPasswordHidden,
    setIsPasswordHidden,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    fullname,
    setFullname,
  } = useGlobalContext();

  return (
    <section className="login-container">
      <div className="login-container-center">
        <h1>Sign Up</h1>
        <form className="login-form">
          <div className="submit-form-control">
            <label htmlFor="fullnameinput">Enter your Full Name:</label>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              required
              id="fullnameinput"
            />
          </div>
          <div className="submit-form-control">
            <label htmlFor="emailinput">Enter your Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              id="emailinput"
            />
          </div>
          <div className="submit-form-control">
            <label htmlFor="passwordinput">Enter your Password:</label>
            <div className="password-container">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordHidden ? "password" : "text"}
                required
                id="passwordinput"
              />
              <button
                onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                type="button"
              >
                {isPasswordHidden ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>
          <div className="submit-form-control">
            <label htmlFor="passwordinput2">Re-Enter your Password:</label>
            <div className="password-container">
              <input
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                required
                id="passwordinput2"
              />
            </div>
          </div>
          <button
            className="submit-form-btn"
            onSubmit={() => {
              setPassword("");
              setEmail("");
            }}
            type="submit"
          >
            Click to Sign Up
          </button>
          <Link className="login-path-anchor" to={`/login`}>
            Already have an Account? Click here to Sign in
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
