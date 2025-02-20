import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter a valid email.");
      setErrMsg("Please enter a valid email");
      return;
    }

    if (password.length < 3 || password != rePassword) {
      toast.error("Please enter a valid password.");
      setErrMsg("Please enter a valid password");
      return;
    }

    setLoading(true);
    setErrMsg("");
    axios
      .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
        email: email,
        newPassword: password,
      })
      .then(({ data }) => {
        console.log("data: ", data);
        toast.success(
          "Verification successful, please enter your new password."
        );
        navigate(`/login`);
      })
      .catch(({ response }) => {
        setErrMsg(response.data.message);
        toast.error(response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h2 className="text-[1.5rem] font-bold my-3">ResetPassword</h2>
      <form className="max-w-md mx-auto w-1/2 my-3" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          />

          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your new password"
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          />

          <input
            type="password"
            id="rePassword"
            value={rePassword}
            placeholder="Enter your new password again"
            onChange={(e) => setrePassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          />
        </div>

        {errMsg && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">{errMsg}</span>
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {loading ? (
            <i className="fa-solid fa-spinner animate-spin text-white"></i>
          ) : (
            "Verify Code"
          )}
        </button>
      </form>
    </div>
  );
}
