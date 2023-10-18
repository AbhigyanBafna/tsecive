"use client"

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import { SemesterGrid } from '@/components/Grids';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [showGrid, setShowGrid] = useState(true);
  const pathName = usePathname();

  const semesters = [
    { name: 'Semester 1', img: '/label.svg', link: '/sem1' },
    { name: 'Semester 2', img: '/label.svg', link: '/sem2' },
    { name: 'Semester 3', img: '/label.svg', link: '/sem3' },
    { name: 'Semester 4', img: '/label.svg', link: '/sem4' },
    { name: 'Semester 5', img: '/label.svg', link: '/sem5' },
    { name: 'Semester 6', img: '/label.svg', link: '/sem6' },
    { name: 'Semester 7', img: '/label.svg', link: '/sem7' },
    { name: 'Semester 8', img: '/label.svg', link: '/sem8' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showGrid={showGrid} setShowGrid={setShowGrid} />

      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col h-[80vh]">
          {showGrid ? <SemesterGrid semesters={semesters} path={pathName} /> : <Search />}
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
