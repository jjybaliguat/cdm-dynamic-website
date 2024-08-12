"use client"

import React, { useState } from 'react';
import { InstructorProps } from '@/types';
import { GithubIcon, InstagramIcon, LinkedinIcon, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function InstructorCard({ data }: InstructorProps) {
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className='gap-8 mx-auto flex w-[250px] flex-col'>
      <div className='relative'>
        <Image
          width={305}
          height={305}
          src={data.imageUrl}
          alt='Instructor image'
          className='rounded-2xl h-[250px]'
        />      
        <div className={`absolute -bottom-6 right-6 w-fit p-0 ${toggled ? 'bg-secondary' : ''} rounded-full transition-colors duration-300`}>
          <div className={`flex flex-col text-primary-foreground gap-3 p-3 pb-0 ${toggled ? 'opacity-1' : 'opacity-0'} transition-all duration-300`}>
            <Link href='' className='flex justify-center items-center'>
              <div className='flex justify-center items-center outline outline-1 rounded-full w-7 h-7'>
                <LinkedinIcon size='16' />
              </div>
            </Link>
            <Link href='' className='flex justify-center items-center'>
              <div className='flex justify-center items-center outline outline-1 rounded-full w-7 h-7'>
                <InstagramIcon size='16' />
              </div>
            </Link>
            <Link href='' className='flex justify-center items-center'>
              <div className='flex justify-center items-center outline outline-1 rounded-full w-7 h-7'>
                <GithubIcon size='16' />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center rounded-full bg-secondary p-3 text-primary-foreground">
            <button
              onClick={toggle}
              className='flex justify-center items-center w-10 h-10 bg-slate-900 rounded-full'
            >
              {toggled ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 px-5'>
        <h3 className='text-xl font-bold'>{data.name}</h3>
        <p className='text-md'>{data.title}</p>
      </div>
    </div>
  );
}

export default InstructorCard;
