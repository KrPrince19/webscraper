import { useContext, useState } from "react";

import api from "../api/axios";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(
        "/auth/login",
        formData
      );

      login(data);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message || 
        error.message || 
        "An error occurred during login."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center grow p-8 min-h-[calc(100vh-100px)]">
      <form onSubmit={handleSubmit} className="bg-slate-800/40 border border-white/10 rounded-3xl p-12 w-full max-w-[420px] backdrop-blur-md shadow-[0_25px_50px_rgba(0,0,0,0.25)] flex flex-col gap-6">
        <h1 className="text-center text-3xl mt-0 mb-2 text-slate-50">Welcome Back</h1>
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="bg-[#0b0f19]/60 border border-white/10 p-4 rounded-xl text-slate-50 text-base outline-none transition-all placeholder-white/30 focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)] focus:bg-[#0b0f19]/80 font-sans"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="bg-[#0b0f19]/60 border border-white/10 p-4 rounded-xl text-slate-50 text-base outline-none transition-all placeholder-white/30 focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)] focus:bg-[#0b0f19]/80 font-sans"
        />

        <button type="submit" className="mt-4 p-4 text-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] shadow-[0_4px_15px_rgba(99,102,241,0.3)] border-none">
          Login to Account
        </button>
      </form>
    </div>
  );
}

export default Login;