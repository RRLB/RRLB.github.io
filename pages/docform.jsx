import React from 'react'
import docformImg from '../public/assets/projectFile/docform.jpeg'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const docform = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-gray-800/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={docformImg} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-4'>
              <h2 className='py-2'>Responsive Form</h2>
              <h3>React Js / PHP / MPDF / SQL</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='overview'>Overview</h2>
          <h4>Responsive web app form</h4>
          <p>This app was built using React JS and is hosted on a php backend. Specific to client requirements, 
            this app captures client information and processes it into a PDF which the client is able to edit 
            and extract information from within the context of digital document management (GED). A drop down 
            menu enables the user to select options and create multiple lines. All data is then passed to m-PDF 
            where it converts it to a PDF which is then stored in the host software and database. Using the 
            parameters, an edit button sends the existing information back to the React form and displays a 
            prefilled form that the user can edit creating an editable PDF.
            A second programme runs autonomously, extracting data from Excel spreadsheets that the client 
            uploads, and passes this data in the same format as the React form data to the php controller, 
            creating the same PDFs.</p>
            <a href='/public/demo/docform/public/index.html'>
              <button className='text-gray-400 px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <button className='text-gray-400 px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4'>
          <div className='p-2'>
            <p className='font-bold pb-2'>Technos</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PHP</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MPDF</p>
              <p className='text-gray-300 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>SQL</p>
            </div>
          </div>
        </div>
  
      </div>
      <div className='flex justify-between'>
            <Link  href='/shg'>
              <p className='justify-start mt-10 ml-6 mb-10 underline cursor-pointer' >Previous Project</p>
              </Link>
              <Link  href='/netflix'>
              <p className='justify-end space-between mt-10 mr-6 mb-10 underline cursor-pointer' >Next Project</p>
              </Link>
          </div>
      <Link  href='/#projects'>
          <p className='ml-6 mb-10 underline cursor-pointer' >Back</p>
          </Link>
    </div>
  )
}

export default docform