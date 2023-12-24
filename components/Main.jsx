import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div  id='home' className='w-full h-screen text-center'>
        <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something great together</p>
                <h1 className='py-4 '>
                    Hi, I'm <span className='text-[#8f6e5d]'>Raphaël</span>
                </h1>
                <h1 className='py-2   text-gray-400'>
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4 max-w-[70%] m-auto'>
                "As a Full Stack Developer, I specialize in crafting engaging digital experiences. 
                With a focus on web application development, I bring ideas to life through responsive, 
                full-stack solutions. Currently, my journey involves developing powerful back-end experiences while building 
                cutting-edge, user-friendly web applications. Let's connect and explore the world of web development together!"
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-16'>
                    <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Main