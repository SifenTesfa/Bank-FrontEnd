import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Login() {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/AddProduct");
    }
  }, []);
  async function login(){
    let item={password,email}
    console.warn(password,email)
   let result= await fetch("http://127.0.0.1:8000/api/login",
      {
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'
        }
      }
    )
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/AddProduct");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
           onClick={login}
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         login
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
