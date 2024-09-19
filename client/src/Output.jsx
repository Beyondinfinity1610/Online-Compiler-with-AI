import React from 'react'

function output({ output }) {
  return (
    <div className='h-[50vh] w-full bg-gray-700 overflow-scroll'>
      {output ? 
        output.map((element, index) => <p key={index}>{element}</p>)
       : "Click \"Run Code\" to execute the code."}
    </div>
  )
}

export default output
