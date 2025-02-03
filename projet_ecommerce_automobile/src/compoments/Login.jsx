import React from "react";
import "../styles/style.css";
import Button from "./Button";
import Title from "./Title";
import Label from "./Label";

function Login() {
  return (
    <div className="flex flex-col gap-y-8 py-12 px-8 bg-red-700 absolute top-2/4 left-2/4  transform -translate-x-1/2 -translate-y-1/2 rounded-2xl border-black">
        <Title>
            Login Page
        </Title>

        <form action="" className="flex flex-col gap-y-8">
            <div className="flex flex-col ">
                <Label htmlFor={"email"}>Email Address</Label>
                <input type="text" id="email" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            </div>

            <Button type={"submit"} onClick={()=> {}}>
                Login
            </Button>
        </form>

      <div className="separator">
        <span></span>
        <span>or</span>
        <span></span>
      </div>

      <div className="social-buttons">
        <Button type="button">Continue with Facebook</Button>
        <Button type="button">Continue With Google</Button>
      </div>

      <p>New Customer? <span className="register-link">Register</span></p>
    </div>
  );
}

export default Login;