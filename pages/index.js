import Head from 'next/head'
import Main from '@/components/main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ProjectComponent from '@/components/ProjectComponent'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raphaël LB | Full-Stack Web Developer</title>
        <meta name="description" content="Built using create next app" />
        <link rel="icon" href="/RB-White.png" />
      </Head>
      
      <Main />
      <About />
      <Skills />
      <ProjectComponent/>
      <Contact />

    </div>
  )
}
