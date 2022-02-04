import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import Modal from 'react-modal/lib/components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Skill from './Skill'
import { skills } from '../data'
const Skills = ({ setShowSkills, showSkills, data }) => {
  return (
    <div>
      <Modal
        isOpen={showSkills}
        onRequestClose={() => {
          setShowSkills(false)
        }}
        id="skill"
        // className="content:[ lg:w-[60vw]] w-[90vw]"
        //   shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.60)',
          },
          content: {
            // width: '60%',

            borderRadius: '1em',
            padding: '1em 2em',
            border: 'none',
            background:
              'linear-gradient(180deg, rgba(68,77,95,0.7) 43%, rgba(234,219,221,0.7) 100%)',
            boxShadow: '6px 9px 9px 2px rgba(0,0,0,0.58)',
            transition: 'all 1s fade-in',
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        <div className="relative flex justify-center">
          <h1 className="text-center font-serif text-4xl font-bold tracking-[0.1em] text-p1">
            SKILLS
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-0 cursor-pointer font-bold text-p1"
            height={35}
            onClick={() => {
              setShowSkills(false)
            }}
          />
        </div>
        <div className="row mt-12 grid grid-cols-2 lg:grid-cols-3">
          {/* html */}
          {data.map((skill) => (
            <Skill id={skill.id} name={skill.name} per={skill.per} />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default Skills
