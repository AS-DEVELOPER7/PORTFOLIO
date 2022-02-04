import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faImage,
  faProjectDiagram,
  faConnectdevelop,
  faImages,
} from '@fortawesome/free-solid-svg-icons'
import Skills from './Skills'
import Gallery from './Gallery'
import Contact from './Contact'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  faAddressCard,
  faAddressBook,
} from '@fortawesome/free-regular-svg-icons'
import Projects from './Projects'
const Bottom = ({ data, Pdata, Idata }) => {
  const [showSkills, setShowSkills] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [showContact, setShowContact] = useState(false)
  return (
    <div className="w-full lg:flex">
      <div
        className="flex h-[30vh]   cursor-pointer items-center justify-center gap-4 bg-black bg-opacity-60 bg-cover bg-no-repeat bg-blend-darken lg:w-[25vw]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        }}
        onClick={() => {
          setShowSkills(true)
        }}
      >
        <div className="flex cursor-pointer gap-4">
          <FontAwesomeIcon
            icon={faCode}
            className="font-bold text-p1"
            height={35}
          />
          <h2 className="font-mono text-3xl  font-semibold text-p4">SKILLS</h2>
        </div>
      </div>
      <div
        className="flex h-[30vh]   cursor-pointer items-center justify-center gap-4 bg-black bg-opacity-60 bg-cover bg-no-repeat bg-blend-darken lg:w-[25vw]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        }}
        onClick={() => {
          setShowProjects(true)
        }}
      >
        <div className="flex cursor-pointer gap-4">
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="font-bold text-p1"
            height={35}
          />
          <h2 className="font-mono text-3xl font-semibold text-p4">PROJECTS</h2>
        </div>
      </div>
      <div
        className="flex h-[30vh]   cursor-pointer items-center justify-center gap-4 bg-black bg-opacity-60 bg-cover bg-no-repeat bg-blend-darken lg:w-[25vw]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2480854/pexels-photo-2480854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        }}
        onClick={() => {
          setShowGallery(true)
        }}
      >
        <div className="flex cursor-pointer gap-4">
          <FontAwesomeIcon
            icon={faImages}
            className="font-bold text-p1"
            height={35}
          />
          <h2 className="font-mono text-3xl font-semibold text-p4">GALLERY</h2>
        </div>
      </div>
      <div
        className="flex h-[30vh]   cursor-pointer items-center justify-center gap-4 bg-black bg-opacity-60 bg-cover bg-no-repeat bg-blend-darken lg:w-[25vw]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        }}
        onClick={() => {
          setShowContact(true)
        }}
      >
        <div className="flex cursor-pointer gap-4">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="font-bold text-p1"
            height={35}
          />

          <h2 className="font-mono text-3xl font-semibold text-p4">CONTACT</h2>
        </div>
      </div>
      <Skills
        showSkills={showSkills}
        setShowSkills={setShowSkills}
        data={data}
      />
      <Projects
        showProjects={showProjects}
        setShowProjects={setShowProjects}
        Pdata={Pdata}
      />
      <Gallery
        showGallery={showGallery}
        setShowGallery={setShowGallery}
        Idata={Idata}
      />
      <Contact showContact={showContact} setShowContact={setShowContact} />
    </div>
  )
}

export default Bottom
