import React from 'react'

function output({ output }) {
  return (
    <div className=' text-[#ECDFCC] font-robotoMono'>
      <div className='p-2 bg-black font-bold'>Output</div>
      <div className='h-[50vh] w-full overflow-auto bg-[#0f211e] p-3 pt-1'>
      {output ? 
        output.map((element, index) => <p key={index}>{element}</p>)
       : "Click \"Run Code\" to execute the code."}
      </div>
    </div>
    
  )
}

export default output
