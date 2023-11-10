import Aboutme from '@/components/aboutme'
import Contact from '@/components/contact'
import Experiance from '@/components/experiance'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <Aboutme />
    <Experiance />
    <Contact />
    <Footer />
    </>
  )
}

export default page