import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from './Images'
import React from 'react'
import Modal from 'react-modal'
import { SRLWrapper } from 'simple-react-lightbox'
const Gallery = ({ showGallery, setShowGallery, Idata }) => {
  const options = {
    settings: {
      autoplaySpeed: 3000,
      boxShadow: 'none',
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: false,
      hideControlsAfter: 3000,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: 'linear',
      overlayColor: 'rgba(30, 30, 30, 0.9)',
      slideAnimationType: 'fade',
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: 'linear',
      usingPreact: false,
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '0',
      thumbnailsGap: '0 1px',
      thumbnailsIconColor: '#ffffff',
      thumbnailsOpacity: 0.4,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px'],
    },
  }
  function shuffleArray(array) {
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  const shuffledPosts = shuffleArray(Idata)
  return (
    <div>
      <Modal
        isOpen={showGallery}
        onRequestClose={() => {
          setShowGallery(false)
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
            GALLERY
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-0 cursor-pointer font-bold text-p1"
            height={35}
            onClick={() => {
              setShowGallery(false)
            }}
          />
        </div>
        <div className="">
          <SRLWrapper options={options}>
            <div className=" mt-8 space-x-4 space-y-4 md:columns-2 lg:columns-3  ">
              {shuffledPosts.map((data) => (
                <Images key={data.id} img={data.img} />
              ))}
            </div>
          </SRLWrapper>
        </div>
      </Modal>
    </div>
  )
}

export default Gallery
