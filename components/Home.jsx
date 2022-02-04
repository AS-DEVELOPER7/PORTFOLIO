import Image from 'next/image'
import React from 'react'
import AS from '../public/img/as.jpg'
// import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Camera,
  CloudDownload,
  Code,
  GitHub,
  Instagram,
} from '@material-ui/icons'
import Link from 'next/link'
// import { Download } from '@mui/icons-material'
const Front = () => {
  return (
    <div className="  grid  w-full lg:grid-flow-col ">
      <div
        className="left flex  h-[70vh]  grid-cols-7 flex-col items-center justify-center bg-black bg-opacity-60 bg-cover bg-no-repeat bg-blend-darken lg:w-[70vw]"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2016/02/22/12/34/pen-1215435__340.jpg")`,
        }}
      >
        <div className="relative h-36 w-36 overflow-hidden rounded-full shadow-md shadow-slate-600 lg:h-52  lg:w-52 ">
          <Image src={AS} alt="" layout="fill" />
        </div>
        <div className=" mt-4 font-serif text-2xl font-bold text-p1 lg:text-4xl">
          I'M ALI HUSSAIN SAGIR
        </div>
        <div className=" text-md text-p4 lg:text-lg">
          WEB DEVELOPER & PHOTOGRAPHER
        </div>
        <div className="mt-4 flex gap-4">
          <div className="h-8 w-8 cursor-pointer rounded-lg  bg-slate-900  flex items-center justify-center">
            <Link href="https://github.com/AS-DEVELOPER7?tab=repositories">
              <GitHub className="rounded-full  text-p4 " />
            </Link>
          </div>
          <div className="h-8 w-8 cursor-pointer rounded-lg  bg-p3  flex items-center justify-center text-white">
            <Link href="https://www.instagram.com/a_sagir77/?utm_medium=copy_link">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="right flex h-[70vh] flex-col items-center justify-center bg-black bg-opacity-60 bg-cover bg-no-repeat py-8 bg-blend-darken lg:w-[30vw]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        }}
      >
        <h2 className="font-serif text-4xl font-bold text-p2">
          ABOUT <span className="text-3xl text-p1">ME</span>
        </h2>
        <div
          className="mt-16  flex flex-col items-start gap-8
        "
        >
          <div className="flex gap-4">
            <div className="flex h-[3em] w-[3em] items-center justify-center rounded-full bg-p2 text-p4 transition-all hover:scale-110 lg:h-[3.5em] lg:w-[3.5em] ">
              <Code />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif  font-semibold tracking-widest text-p1 text-2xl">
                WEB DEVELOPER
              </h1>
              <p className="text-sm tracking-wider  text-p4">
                FRONT-END DEVELOPER
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="flex h-[3em] w-[3em] items-center justify-center rounded-full bg-p2 text-p4 transition-all hover:scale-110 lg:h-[3.5em] lg:w-[3.5em] ">
              <Camera />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl font-semibold tracking-widest text-p1">
                PHOTOGRAPHY
              </h1>
              <p className="text-sm tracking-wider text-p4">
                LANDSCAPE PHOTOGRAPHER
              </p>
            </div>
          </div>
        </div>
        <a href="https://internshala.com/student/resume_download/735880B4-3A13-86F4-0A0B-8228E73EFA56/7623206">
          <div className="mt-10 flex cursor-pointer items-center gap-2 rounded-lg bg-p1 px-6 py-2 text-p4">
            <CloudDownload /> <span className="text-lg text-p4">RESUME</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Front
