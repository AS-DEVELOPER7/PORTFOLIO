import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import React from 'react'
import Modal from 'react-modal'
const Projects = ({ showProjects, setShowProjects, Pdata }) => {
  return (
    <div>
      <Modal
        isOpen={showProjects}
        onRequestClose={() => {
          setShowProjects(false)
        }}
        //   shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.60)',
          },
          content: {
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
          <h1 className="text-center font-serif text-4xl font-bold tracking-[0.1em] text-p1 ">
            PROJECTS
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-0 cursor-pointer font-bold text-p1"
            height={35}
            onClick={() => {
              setShowProjects(false)
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-1  xl:grid-cols-3">
          {Pdata.map((data) => (
            <Project key={data.id} link={data.link} img={data.img} />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default Projects
