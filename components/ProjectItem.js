import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function ProjectItem ({imgUrl, title, technology, href }) {

    return(
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#e9c2af] to-[#8f6e5d]'>
           
                <Image className='rounded-xl group-hover:opacity-10' src={imgUrl} width="640" height="360" alt={title}/>
            
            
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[]-50% translate-y-[-50%]'>
                        <h3 className='text-2xl text-gray-700 tracking-wider text-center uppercase'>{title}</h3>
                        <p className='pb-4 pt-2 text-center text-gray-700'>{technology}</p>
                        <Link href={href}>
                            <p className='text-gray-300 text-center py-3 rounded-lg bg-[#131f29] font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
    )
}

export default ProjectItem