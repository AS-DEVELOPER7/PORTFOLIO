import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { start } from 'repl'

const Project = ({ link, img }) => {
  return (
    <div className="relative mt-12 h-[30vh] md:w-[38vh] mx-auto  overflow-hidden rounded-lg shadow-xl">
      <div className="sticky z-30 flex h-5 items-center space-x-2 bg-p4 px-2">
        <div className="h-[0.6em] w-[0.6em] rounded-full bg-p2"></div>
        <div className="h-[0.6em] w-[0.6em] rounded-full bg-p2"></div>
        <div className="h-[0.6em] w-[0.6em] rounded-full bg-p2"></div>
      </div>
      <Link href={link} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <img
            src={img}
        loading="lazy"
            className="transition-all duration-[6s] ease-in-out hover:-translate-y-full"
          />
        </a>
      </Link>
    </div>
  )
}

export default Project
