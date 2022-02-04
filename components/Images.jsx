import React from 'react'
const Images = ({ img }) => {
  return (
    <div className="flex items-center ">
      <img
        src={img}
        srl_gallery_image="true"
        className="cursor-pointer rounded-lg shadow-lg "
      />
    </div>
  )
}

export default Images
