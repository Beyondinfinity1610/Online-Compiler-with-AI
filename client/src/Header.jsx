import React from 'react'

function Header({ onLanguageChange, runCode, AICall }) {
  const lang = ["javascript", "python", "c", "cpp"];

  return (
    <div className='flex bg-black justify-between'>
      <select className="h-8 border-black border-2 m-2 rounded-lg px-2"
        onChange={(event) => onLanguageChange(event.target.value)}
      >
        {lang.map((ele, index) => (
          <option key={index} value={ele}>{ele}</option>
        ))}
      </select>

      <button className='bg-white p-1 rounded-lg m-2 ml-[35px]' onClick={() => {runCode(); AICall();}}>Run Code</button>
      <button className='bg-white p-1 rounded-lg m-2' onClick={AICall}>AI Hint</button>
    </div>
  )
}

export default Header