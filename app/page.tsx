import About from '@/components/About'
import CEOMessage from '@/components/CEOMessage'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Contact from '@/components/Contact'
// import Videos from '@/components/Videos'
import React from 'react'

const page = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="feature">
        <Feature />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="contact">
        <Contact/>
        {/* <Videos /> */}
        <CEOMessage />
      </section>
    </>
  )
}

export default page
