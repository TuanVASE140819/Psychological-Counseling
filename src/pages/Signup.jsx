import React from "react";

function Signup() {
  return (
    <div className="container-signin-register">
      <div className="main-signin">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label className="label-L-G" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input className="ip-file" type="text" name="txt" placeholder="User name" required />
            <input className="ip-file" type="email" name="email" placeholder="Email" required />
            <input
            className="ip-file"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="btn-L-R" >Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label className="label-L-G" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input className="ip-file" type="email" name="email" placeholder="Email" required />
            <input
            className="ip-file"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="btn-L-R">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
