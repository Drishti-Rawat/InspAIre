'use client'
import React, { useContext } from 'react';
import { Lacquer } from 'next/font/google';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Star } from 'lucide-react';
import { UserDetailsContext } from '@/app/_context/UserDetailsContext';
import { Button } from '@/components/ui/button';

const inter = Lacquer({ subsets: ['latin'], weight: ['400'] });

const Header = () => {

    const {userDetails, setUserDetails} = useContext(UserDetailsContext)
    console.log("user details",userDetails)


  return (

    <div className='p-5 shadow-sm flex justify-between items-center'>
    <div className={`flex items-center gap-1  ${inter.className}`}>
    <Image
        src="/logo.svg"
        alt="Logo"
        width={34}
        height={34}
      />
      <h2 className="text-2xl font-bold tracking-wide text-gray-900">
        Insp<span className="text-primary text-3xl font-extrabold tracking-wider">AI</span>re
      </h2>
    </div>

    <Button  variant="ghost" className=' text-primary  rounded-full'>Buy More Credits</Button>

    <div className='flex gap-7 items-center justify-center'>
        <div className='flex gap-2 p-1 items-center justify-center bg-slate-200 px-3 rounded-full'> 
        <Star size={22} fill='#f0cc45' stroke='##f0cc45' className="animate-bounce" />
        <h2 className='text-sm font-semibold '>{userDetails?.credits}</h2>
        </div>

    

        <UserButton/>
   
    </div>

    </div>
  );
};

export default Header;