"use client"

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Manual from '@/components/Grids';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const [showGrid, setShowGrid] = useState(false);

  const branches = [
    { name: 'Computer Science', img: '/cs.png' },
    { name: 'Information Technology', img: '/it.png' },
    { name: 'Artificial Intelligence & Data Science', img: '/aids.png' },
    { name: 'Electronics and Telecommunication', img: '/extc.png' },
    { name: 'Chemical Engineering', img: '/chem.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>

      <main className="flex-grow flex container mx-auto p-4">

        <Image
        width={500} height={500} 
        className="w-[700px] h-[560px] object-cover my-auto"
        alt=""
        src="/studyPerson.png" />

        <div className='flex-grow p-3 my-auto'>

            <h1 className="text-6xl font-poppins font-semibold">
                Make your <span className="text-lightseagreen">Work</span> Easier with Us.
            </h1>
            <p className="text-sm font-normal font-inter text-gray-200 inline-block w-[505px]">
                Discover TSECive, your go-to hub for organized, diverse educational resources.
                <br/><br/>
                Break free from the search for quality content with our user-friendly
                platform, combining freemium access and collaborative contributions,
                transforming how students learn and share.
            </p>
            <Link href="/home">
                <button 
                className="border-4 border-darkseagreen rounded-2xl w-60 h-16 text-2xl my-10 font-inter font-medium text-gray-100 hover:bg-darkseagreen hover:text-white hover:border-transparent transition duration-300 ease-in-out">
                    GET STARTED
                </button>
            </Link>

        </div>

      </main>

    </div>
  );
}
