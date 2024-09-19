import React from 'react'

const AIbox = ({ AiHint }) => {
  return (
    <div className='h-[50vh] bg-gray-500'>
      {AiHint ? AiHint : "Run the code to check if there are any errors"}
    </div>
  )
}

export default AIbox
