"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Search from './Search';
import About from '../About';


function HomePage() {
  const user = {
    // id: "214859415",
    email: "a@a.a",
    name: "michal",
    password: "1234"
  };

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    sendData();
  }, []);
  return (
    <>
      {/* תפריט ניווט */}
      <div className="min-h-screen">
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-around">
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-gray-400">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li>
              <a href="#about-section" className="hover:text-gray-400">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* קומפוננטת חיפוש */}
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-4">
        <Search />
      </div>

      {/* סקשן About בתחתית הדף */}
      <div id="about-section">
        <About />
      </div>
    </>
  );
}

export default HomePage;
