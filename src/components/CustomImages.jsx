import React from 'react'

const CustomImages = ({src,paddingTop}) => {
  return (
    <div className='custom-image' style={{paddingTop:paddingTop}}>
      <img src={process.env.PUBLIC_URL+src} alt="my" />
    </div>
  )
}

export default CustomImages
