import React from 'react'
import language from './assets/languages';

function Header({ onLanguageChange, runCode, AICall }) {
  return (
    <div className='flex bg-[#181C14] justify-between font-robotoMono'>
      <select className="h-[40px] bg-black border-[#C4DAD2] border-2 m-2 rounded-lg pb-1 px-2 text-[#ECDFCC]"
        onChange={(event) => onLanguageChange(event.target.value)}
      >
        {language.map((ele, index) => (
          <option key={index} value={ele}>{ele}</option>
        ))}
      </select>

      <button className='p-1 px-2 rounded-lg m-2 ml-[60px] text-[#ECDFCC] border-2 border-[#C4DAD2] hover:bg-[#C4DAD2] hover:text-black' onClick={() => {runCode(); AICall();}}>Run Code</button>
      <button className='p-1 px-2 rounded-lg m-2 text-[#ECDFCC] border-2 border-[#C4DAD2] hover:bg-[#C4DAD2] hover:text-black' onClick={() => {AICall();}}>AI Hint</button>
    </div>
  )
}

export default Header