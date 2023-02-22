import React, { useState } from "react";
import "./Login.css";
import SignIn from "../SignIn/SignIn";
function Login() {
  const [signIn, setSignIn] = useState(false);


  return (
    <>
      <div className="login">
        <div className="login__background">
          <img
            className="login__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="LOGO"
          />
          <button onClick={() => setSignIn(true)} className="login__btn">
            sign up
          </button>
        </div>
        <div className="login__gradient" />
        <div className="login__body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films,Tv programes and more. </h1>
              <h2> Watch anywhere,cancel at any time</h2>
              <h3>
                Ready to watch?Enter your email to create or restart your
                membership
              </h3>
              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email addres" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="login__getstarted"
                  >
                    {" "}
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
