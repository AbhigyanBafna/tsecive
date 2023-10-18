"use client"

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import { BranchGrid } from '@/components/Grids';
import { usePathname, useRouter } from 'next/navigation';

export default function Home() {
  const [showGrid, setShowGrid] = useState(true);
  const router = useRouter();
  const pathName = usePathname();

  const branches = [
    { name: 'Computer Science', img: '/cs.png', link: '/cs' },
    { name: 'Information Technology', img: '/it.png', link: '/it' },
    { name: 'Artificial Intelligence & Data Science', img: '/aids.png', link: '/aids' },
    { name: 'Electronics and Telecommunication', img: '/extc.png', link: '/extc' },
    { name: 'Chemical Engineering', img: '/chem.png', link: '/chem' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showGrid={showGrid} setShowGrid={setShowGrid} />

      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col h-[80vh]">
          {showGrid ? <BranchGrid branches={branches} path={pathName} /> : <Search />}
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
