import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignIn.css";
function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault(); //to prevent refresh

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const sign = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Signin">
      <form>
        <h1> Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="Enter Your Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={sign} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signin__gray">New to Netflix? </span>
          <span onClick={register} className="signin__link">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signin;
