"use client"

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import { SubjectGrid } from '@/components/Grids';
import { usePathname } from 'next/navigation';
import { fetchSubjectNames } from '@/utils/queries';
import { client } from '../../../../../sanity/lib/client';

export default function Home() {
  const [showGrid, setShowGrid] = useState(true);
  const [subjects, setSubjects] = useState(null); // Initialize subjects state as null
  const pathName = usePathname();

  const pathParts = pathName.split('/');
  const branch = pathParts[2].toUpperCase();
  const sem = pathParts[3];
  console.log('Branch:', branch);
  console.log('Semester:', sem);

  useEffect(() => {
    // Create a function to fetch and set subjects data
    async function fetchSubjectsData() {
      try {
        const data = await client.fetch(fetchSubjectNames(branch, sem));
        console.log("Data", data);
        setSubjects(data); // Set the subjects state when data is available
      } catch (error) {
        console.error(error);
      }
    }

    fetchSubjectsData(); // Call the function to fetch subjects when the component mounts
  }, [branch, sem]);

  // const subjects = [
  //   { name: 'Subject 1', img: '/label.svg', link: '/sub1' },
  //   { name: 'Subject 2', img: '/label.svg', link: '/sub2' },
  //   { name: 'Subject 3', img: '/label.svg', link: '/sub3' },
  //   { name: 'Subject 4', img: '/label.svg', link: '/sub4' },
  //   { name: 'Subject 5', img: '/label.svg', link: '/sub5' },
  // ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showGrid={showGrid} setShowGrid={setShowGrid} />

      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col h-[80vh]">
          {showGrid ? <SubjectGrid subjects={subjects} path={pathName} /> : <Search />}
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
