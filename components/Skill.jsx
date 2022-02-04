import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const Skill = ({ per, name }) => {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= per ? per : newLevel + 1))
    }, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className=" my-4 flex flex-col items-center gap-2">
      <div className="relative h-[7em] w-[7em] sm:h-[9em] sm:w-[9em]">
        <CircularProgressbar
          className="bg-#606a7d"
          value={level}
          strokeWidth={10}
          styles={buildStyles({
            textSize: '2em',
            strokeLinecap: 'round',
            pathTransitionDuration: '0.2',

            // Colors

            pathColor: '#ED5820F0',
            // backgroundColor: ' #EADBDD',
            trailColor: '#EADBDDF0 ',
          })}
        />
        <div className="absolute top-[35%] left-[30%] text-2xl sm:text-3xl font-bold text-p1">{`${level}%`}</div>
      </div>
      <div className="sm:text-2xl text-lg font-bold sm:tracking-wider text-p1">{name}</div>
    </div>
  )
}

export default Skill
