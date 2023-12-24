import React from 'react'
import Image from 'next/image'
import SHGImg from '../public/assets/projectFile/SHGImg.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const shg = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={SHGImg} alt='/' />
          
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-4'>
              <h2 className='py-2'>Image Map</h2>
              <h3>HTML / CSS / SquareSpace</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <h4>Exherpt - list out why you enjoy, why you chose it, what you learned what you overcame</h4>
          <p>This website landing page image map was built just using HTML and CSS hosted on SquareSpace. 
            Users are able to move over the image to different sections of the garden map and select different 
            building that highlight when the mouse hovers over them. Users are then redirected to other pages and websites.
            The constraint of the project was creating a responsive image map that detected the outlines of each building
            whilst maintaining a rapidly loading webpage and not bogging it down with heavy files or svg images.</p>
            <button className='text-gray-400 px-8 py-2 mt-4 mr-8'>Demo tbd - create pop out view of video</button>
            <button className='text-gray-400 px-8 py-2 mt-4'>Code tbd create pop out view of code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4'>
          <div className='p-2'>
            <p className='font-bold pb-2'>Technos</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>SquareSpace</p>
            </div>
          </div>
        </div>
        
        </div>
      <div className='flex justify-between'>
            <Link  href='/crypto'>
              <p className='justify-start mt-10 ml-6 mb-10 underline cursor-pointer' >Previous Project</p>
              </Link>
              <Link  href='/docform'>
              <p className='justify-end space-between mt-10 mr-6 mb-10 underline cursor-pointer' >Next Project</p>
              </Link>
          </div>
      <Link  href='/#projects'>
          <p className='ml-6 mb-10 underline cursor-pointer' >Back</p>
          </Link>
    </div>
  )
}

export default shg