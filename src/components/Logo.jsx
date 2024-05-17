// import React from 'react'
// import logo from '../assets/image.png'

// function Logo({width = '100px' ,height='78px'}) {
//   return <div className='lg:w-20 md:w-16 sm:w-20'><img src={logo} width={width} height={height}alt="Logo"/></div>
// }
// export default Logo

import React from 'react'
import logo from '../assets/image.png'

function Logo({ width = '100px', height = '34px' }) {
  return (
    <div className='lg:w-20 md:w-16 sm:w-20'>
      <img src={logo} style={{ width, height }} alt="Logo" />
    </div>
  )
}

export default Logo
