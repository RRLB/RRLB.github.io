
import React from 'react'
import SkillsEntry from './SkillsEntry';

function Skills() {
    const skillsData = [
        { imageUrl: "/assets/skills/html.png", title: "HTML" },
        { imageUrl: "/assets/skills/css.png", title: "CSS" },
        { imageUrl: "/assets/skills/javascript.png", title: "JavaScript" },
        { imageUrl: "/assets/skills/react.png", title: "React" },
        { imageUrl: "/assets/skills/php.png", title: "PHP" },
        { imageUrl: "/assets/skills/tailwind.png", title: "Tailwind" },
        { imageUrl: "/assets/skills/mysql.png", title: "MySql" },
        { imageUrl: "/assets/skills/shopify.png", title: "Shopify" },
    ]
  return (
    <div  id='skills' className='w-full lg:h-screen p-2 md:mt-80 lg:mt-0 mb-80'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl uppercase'>Skills</p>
            <h2>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                {skillsData.map((skill, index) => (
                    <SkillsEntry key={index} imageUrl={skill.imageUrl} title={skill.title}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Skills