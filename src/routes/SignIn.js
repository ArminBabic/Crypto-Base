import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { signIn, UserAuth } from "../context/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section className="max-w-[400px] min-h-[600px] mx-auto py-24">
      <h2 className="text-2xl font-bold py-4">Sign In</h2>

      <form onSubmit={submitHandler} className="flex flex-col">
        <label className="py-2">Email</label>
        <div className="relative">
          <input
            onChange={emailHandler}
            className="w-full bg-primary  p-2 border border-input rounded-2xl shadow-xl mb-2"
          />
          <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
        </div>
        <label className="py-2">Password</label>
        <div className="relative">
          <input
            onChange={passwordHandler}
            className="w-full  bg-primary p-2 border border-input rounded-2xl shadow-xl mb-2"
          />
          <AiFillLock className="absolute right-2 top-3 text-gray-400" />
        </div>

        <button className=" w-full text-btnText bg-button rounded-2xl mt-4 py-2 mb-10  hover:shadow-xl">
          Sign in
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/SignUp" className="text-accent">
          Sign up
        </Link>
      </p>
    </section>
  );
}

export default SignIn;
