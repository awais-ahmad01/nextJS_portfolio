import Hero from '@/components/Hero/Hero'
import MyExperience from '@/components/MyExperience/MyExperience'

import MySkills from '@/components/MySkills/MySkills'
import Projects from '@/components/projects'
import Contact from '@/components/Contact/Contact'

import React from 'react'

export default function Home() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className='gap-[100px] flex-col max-w-full w-full lg:max-w-[750px] lg:w-[80%] lg:flex-nowrap flex items-center 
      flex-none h-min justify-center  relative overflow-hidden lg:overflow-visible p-[40px_0px] md:p-[80px_0px]  ' >
        <Hero />
        <MyExperience />
        <MySkills />
       
        <Projects showData={2} isMore />

        <Contact />
      
      </div>
    </div>
  )
}
