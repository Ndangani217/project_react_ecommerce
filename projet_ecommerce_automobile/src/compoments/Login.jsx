import "../styles/style.css";
import React from "react";
import Button from "./Button";
import Title from "./Title";
import Label from "./Label";

import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';



function Login() {
  return (
    <div className="w-[595px] h-[715px] flex flex-col gap-y-8 py-12 px-8 absolute top-2/4 left-2/4  transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-2xl border-black">
        <Title>
            Login Page
        </Title>

        <form action="" className="flex flex-col items-center gap-y-8">
            <div className="flex flex-col ">
                <Label htmlFor={"email"}>Email Address</Label>
                <input className="bg-grayCustom w-[371px] h-[40px] rounded-xl text-lg p-2 outline-1 focus:outline-offset-1 focus:outline-blueCustom" type="text" id="email" />
            </div>

            <div className="flex flex-col ">
                <Label htmlFor="password">Password</Label>
                <input className="bg-grayCustom w-[371px] h-[40px] rounded-xl text-lg p-2 outline-1 focus:outline-offset-1 focus:outline-blueCustom" type="password" id="password"/>
            </div>
            <Button type={"submit"} onClick={()=> {}} width={"w-[178px]"}>
                Login
            </Button>
        </form>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-black"></div>
          <span class="mx-2 text-gray-500">or</span>
          <div class="flex-grow border-t border-black"></div>
        </div>

        <div className="flex flex-col gap-y-4 items-center">
          <Button type="button" width={"w-[371px]"}> <span><FacebookIcon/></span>Continue with Facebook</Button>
          <Button type="button" width={"w-[371px]"} bgColor={"bg-white"} textColor={"text-blueCustom"} border={"border border-blueCustom"}> <span><GoogleIcon/></span> Continue With Google</Button>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <span className="font-amstelvar"> New Customer ?</span>
          <Button bgColor={"bg-transparent"} textColor={"text-blueCustom"}>Register</Button>
        </div>
    </div>
  );
}

export default Login;