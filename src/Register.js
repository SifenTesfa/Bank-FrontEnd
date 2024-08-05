import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Register() {
  useEffect(()=>{
    if(localStorage.getItem("user-info"))
    {
      navigate("/AddProduct");
    }
  },[])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
async function signUp(){
  let item={name,password,email}
  console.warn(item)
 let result= await fetch("http://127.0.0.1:8000/api/register",
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
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <> <Header />
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
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
        onClick={signUp}
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         Sign Up
        </button>
      </form>
    </div> </>
  );
}

export default Register;