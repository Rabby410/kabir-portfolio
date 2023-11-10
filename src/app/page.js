import Aboutme from '@/components/aboutme'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Experiance from '@/components/experiance'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import WorkDemonstration from '@/components/workdemostration'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <Aboutme />
    <Experiance />
    <WorkDemonstration />
    <Education />
    <Contact />
    <Footer />
    </>
  )
}

export default page