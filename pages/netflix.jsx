import React from 'react'
import netflixImg from '../public/assets/projectFile/netflix.jpg'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflixImg} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-4'>
              <h2 className='py-2'>Netflix UI</h2>
              <h3>React Js / Tailwind / Firebase</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <h4>Exherpt - list out why you enjoy, why you chose it, what you learned what you overcame</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa eget quam sollicitudin mollis suscipit vitae arcu. 
          Suspendisse laoreet justo et mauris consequat dignissim id a tortor. Aenean ultricies facilisis lacus at lacinia. 
          Donec vel facilisis turpis. Vivamus sed varius sem. Phasellus in scelerisque purus. Sed vitae elementum urna. Donec porta, 
          sem ac porttitor feugiat, quam urna mattis elit, quis cursus sapien turpis sit amet lacus. Vestibulum viverra ipsum quis tincidunt 
          viverra. Sed nec nunc in ligula maximus ultricies quis vitae ante. Sed nibh risus, dignissim ut mollis nec, elementum vel nulla. 
          Sed euismod nisi quis porta dignissim.
          </p>
          <button className='text-gray-400 px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='text-gray-400 px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4'>
          <div className='p-2'>
            <p className='font-bold pb-2'>Technos</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Google API</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Zillow API</p>
            </div>
          </div>
        </div>
        </div>
      <div className='flex justify-between'>
            <Link  href='/docform'>
              <p className='justify-start mt-10 ml-6 mb-10 underline cursor-pointer' >Previous Project</p>
              </Link>
              <Link  href='/crypto'>
              <p className='justify-end space-between mt-10 mr-6 mb-10 underline cursor-pointer' >Next Project</p>
              </Link>
          </div>
      <Link  href='/#projects'>
          <p className='ml-6 mb-10 underline cursor-pointer' >Back</p>
          </Link>
    </div>
  )
}

export default netflix