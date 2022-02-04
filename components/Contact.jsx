import emailjs from 'emailjs-com'
import {
  faMapLocation,
  faPaperPlane,
  faPhone,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { GitHub, Instagram, Map } from '@material-ui/icons'
import Link from 'next/link'
const Result = () => {
  return (
    <div>
      <p className="-mt-4 text-center text-lg tracking-widest text-p4">
        Your message has been sent successfully. I will contact you soon
      </p>
    </div>
  )
}
const Contact = ({ showContact, setShowContact }) => {
  const [result, setResult] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_i0gty94',
        'template_dayp3me',
        form.current,
        'user_pzzoA5p3J2TbcnQYaagZ3'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setResult(true)
  }

  return (
    <div>
      <Modal
        isOpen={showContact}
        onRequestClose={() => {
          setShowContact(false)
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
        <div className="">
          <div className="flex w-full justify-center ">
            <h1 className="text-center font-serif text-3xl font-bold tracking-[0.1em] text-p1 ">
              CONTACT
            </h1>
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute right-5 cursor-pointer font-bold text-p1"
              height={35}
              onClick={() => {
                setShowContact(false)
              }}
            />
          </div>
          <div className="">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-12 flex flex-col items-center space-y-10"
            >
              <div className="flex w-full flex-col items-center justify-center space-y-8 space-x-4 lg:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="ml-4 w-full border-b-2 border-p4 bg-transparent pl-2 pb-1 text-xl text-p4 outline-none lg:mt-8 lg:-ml-4 lg:w-[15vw]"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  className=" w-full border-b-2 border-p4 bg-transparent pl-2 pb-1 text-xl text-p4 outline-none lg:w-[15vw]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full  border-b-2 border-p4 bg-transparent pl-2 pb-1 text-xl text-p4 outline-none lg:w-[15vw] "
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className=" ml-4 w-full border-b-2 border-p4 bg-transparent pl-2 pb-1 text-xl text-p4 outline-none lg:-ml-8 lg:w-[46vw]"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-p1 py-2 text-xl font-bold tracking-widest text-p4 lg:w-[46vw]"
              >
                SEND
              </button>
              {result ? <Result /> : ''}
            </form>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55741.15490709341!2d73.67752863672743!3d24.603963982980286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5640659a7d5%3A0x9257af76faeaab0e!2sCity%20Palace!5e0!3m2!1sen!2sin!4v1643905164864!5m2!1sen!2sin"
              loading="lazy "
              className="mt-14 h-[40vh] w-full"
            ></iframe>
          </div>
          <hr className="mt-8 h-[1px] w-full border-none bg-p4" />
          <div className="mt-4 flex flex-col items-center ">
            <h1 className="text-center font-serif text-3xl font-semibold  text-p1">
              HIRE ME
            </h1>
            <p className="mt-2 text-center text-lg text-p4">
              I'M Front-end Web Developer & Landscape Photographer
            </p>
            <div className="mt-8 flex gap-4 ">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-900 ">
                <Link href="https://github.com/AS-DEVELOPER7?tab=repositories">
                  <GitHub className="rounded-full text-p4" />
                </Link>
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-p3   text-white">
                <Link href="https://www.instagram.com/a_sagir77/?utm_medium=copy_link">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <hr className="mt-8 h-[1px]  w-full border-none bg-p4" />

          <div className=" mt-10 flex w-full flex-col items-center gap-4 lg:ml-[2vw] lg:grid lg:grid-cols-3">
            <div className="flex  items-center gap-4">
              <FontAwesomeIcon
                icon={faMapLocation}
                className=" text-p1"
                height={25}
              />
              <div className="text-p4">Hathipole,Udaipur,Rajasthan,India</div>
            </div>

            <div className="flex gap-4 lg:ml-8 lg:flex-col">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className=" text-p1"
                  height={25}
                />
                <div className="text-p4">+917665212079</div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className=" text-p1"
                  height={25}
                />
                <div className="text-p4">+917976236050</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:-ml-12">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className=" text-p1"
                  height={25}
                />
                <div className="text-p4">alihussainsagir53@gmail.com</div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className=" text-p1"
                  height={25}
                />
                <div className="text-p4">alihussainsagir51@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Contact
