import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto'>{children}</div>
  )
}

export default Container


//use this to display content in this 
// ex:<Container>  add content here</Container>