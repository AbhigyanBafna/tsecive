"use client"

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Manual from '@/components/Manual';

export default function Home() {
  const [showGrid, setShowGrid] = useState(false);

  const branches = [
    { name: 'Computer Science', img: '/cs.png' },
    { name: 'Information Technology', img: '/it.png' },
    { name: 'Artificial Intelligence & Data Science', img: '/aids.png' },
    { name: 'Electronics and Telecommunication', img: '/extc.png' },
    { name: 'Chemical Engineering', img: '/chem.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar showGrid={showGrid} setShowGrid={setShowGrid} />

      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col h-[80vh]">
          {showGrid ? <Manual branches={branches} /> : <Search />}
        </div>
      </main>

      <button
  className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
  onClick={() => alert('Go to upload page')}
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>

    </div>
  );
}
