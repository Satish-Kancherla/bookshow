'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const Signup = () => {
  const [content, setContent] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
   
  });

  const router = useRouter();
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('/api/auth/signup', content);
        console.log(res.data);
        setContent({
          firstname: '',
          surname: '',
          email: '',
          password: '',
        });
        router.push('/');        
    }
     catch {
      console.warn('Signup failed');
    }
  };

  return (
    <div className="min-h-screen py-14 bg-gray-100">
      <div className="flex flex-col lg:flex-row w-7/12 lg:w-5/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full lg:w-2/2 py-16 px-12">
          <h2 className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It’s free and only takes a minute
          </p>
          <form onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-5 text-md">
              <input
                type="text"
                name="firstname"
                onChange={handleInput}
                value={content.firstname}
                placeholder="Firstname"
                className="border border-gray-400 py-1 px-2 h-12 rounded-md"
              />
              <input
                type="text"
                name="surname"
                onChange={handleInput}
                value={content.surname}
                placeholder="Surname"
                className="border border-gray-400 py-1 px-2 h-12 rounded-md"
              />
            </div>
            <div className="mt-7">
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={content.email}
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full h-12 rounded-md"
              />
            </div>
            <div className="mt-7">
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={content.password}
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full h-12 text-md rounded-md"
              />
            </div>
            <div className="mt-5">
              <span>
                By clicking Register, you agree to our{' '}
                <a href="#2" className="text-purple-500 font-semibold">
                  Terms of Use
                </a>{' '}
                &{' '}
                <a href="#1" className="text-purple-500 font-semibold">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mt-5 mb-5">
              <button
                type="submit"
                className="w-full bg-black py-3 text-center text-white rounded-md disabled:bg-gray-300 disabled:text-black"
              >
                Register Now
              </button>
            </div>
            <div className="text-center text-gray-400">
              Already have an account?
              <span className="font-bold text-black ml-2 hover:underline">
                <Link href="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;