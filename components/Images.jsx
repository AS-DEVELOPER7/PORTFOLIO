import React from 'react'
const Images = ({ img }) => {
  return (
    <div className="">
      <img
        src={img}
        loading="lazy"
        srl_gallery_image="true"
        className="cursor-pointer rounded-lg  shadow-lg "
      />
    </div>
  )
}

export default Images
