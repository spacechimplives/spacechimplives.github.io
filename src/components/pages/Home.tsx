// import React, { useEffect, useRef } from 'react'

import Section from '../section'

import About from "@/components/sections/About"

export default function Home({ position }: { position: string }) {

  console.log(position)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1" style={{
      width: '100%',
      padding: '0 3vw',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <Section position="about" current={position}>
        <About />
      </Section>

    </div>
  )
}

