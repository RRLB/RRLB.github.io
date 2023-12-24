import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ProjectItem from './ProjectItem';


function ProjectComponent() {
    const projectData = [
        { imgUrl: "/assets/projectFile/docform.jpg", title: "Responsive Web Form", technology: "React Js", href: "/docform" },
        { imgUrl: "/assets/projectFile/netflix.jpg", title: "Netflix", technology: "React Js", href: "/netflix" },
        { imgUrl: "/assets/projectFile/crypto.jpg", title: "Crytpo", technology: "React Js", href: "/crypto" },
        
    ]

  return (
    <div  id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl uppercase'>Projects</p>
            <h2>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap 8'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#e9c2af] to-[#8f6e5d]'>
                <div className='aspect-w-16 aspect-h-9'>
                    <video
                        className="rounded-xl group-hover:opacity-10 w-640 h-480 z-10 object-cover "
                        src="/assets/projectFile/SHG.mp4"
                        autoPlay
                        loop
                        muted
                    >
                    </video>
                </div>
               <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[]-50% translate-y-[-50%]'>
                   <h3 className='text-2xl text-gray-700 tracking-wider text-center uppercase'>Image Map</h3>
                   <p className='pb-4 pt-2 text-center text-gray-700'>HTML CSS</p>
                   <Link href='/shg'>
                       <p className='text-gray-300 text-center py-3 rounded-lg bg-[#131f29] font-bold text-lg cursor-pointer'>More Info</p>
                   </Link>
               </div>
           </div>
            {projectData.map((project, index) => (
                    <ProjectItem key={index} imgUrl={project.imgUrl} title={project.title} technology={project.technology} href={project.href}/>
                ))}
            
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent