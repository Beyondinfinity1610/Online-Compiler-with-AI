import React from 'react'

const AIbox = ({ AiHint }) => {
  return (
    <div className='text-[#ECDFCC] font-robotoMono'>
      <div className='h-[40vh] bg-[#161e18] overflow-y-visible-auto p-3 pt-1 text-[#ECDFCC]'>
        {AiHint ? AiHint : 'Click "Run Code" or "AI Hint" check if there are any errors'}
      </div>
    </div> 
  )
}

export default AIbox