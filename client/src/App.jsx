import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import MonacoEditor from './MonacoEditor';
import Header from './Header';
import Output from './Output';
import Input from './Input';
import AIbox from './AIbox';

function App() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState("javascript");
  
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState('');
  const [AiHint, setAiHint] = useState(null);

  const [showOutput, setShowOutput] = useState(true);

  const [outputButtonStyle, setOutputButtonStyle] = useState('p-1 border-2 rounded-md rounded-b-none text-white pr-2 pl-2 bg-[#C4DAD2] text-black');
  const [inputButtonStyle, setInputButtonStyle] = useState('p-1 border-2 border-black rounded-md rounded-b-none text-grey pr-2 pl-2 hover:bg-[#C4DAD2] hover:text-black');

  function handleLanguage(language) {
    setLanguage(language);
  }

  function handleInputClick(){
    setShowOutput(false);
    setInputButtonStyle('p-1 border-2 rounded-md rounded-b-none text-white pr-2 pl-2 bg-[#C4DAD2] text-black');
    setOutputButtonStyle('p-1 border-2 border-black rounded-md rounded-b-none text-grey pr-2 pl-2 hover:bg-[#C4DAD2] hover:text-black');    
  }
  
  function handleOutputClick() {
    setShowOutput(true);
    setOutputButtonStyle('p-1 border-2 rounded-md rounded-b-none text-white pr-2 pl-2 bg-[#C4DAD2] text-black');
    setInputButtonStyle('p-1 border-2 border-black rounded-md rounded-b-none text-grey pr-2 pl-2 hover:bg-[#C4DAD2] hover:text-black');
  }

  function handleInput(event){
    setInput(event.target.value);
    console.log(input);
  }

  async function handleRunCode(){
    try {
      setOutput(["Executing Please Wait..."]);
      const response = await axios.post('http://localhost:3000/run', {
        code: editorRef.current.getValue(),
        stdin: input,
        language: language
      })
      setShowOutput(true);
      setOutputButtonStyle('p-1 border-2 rounded-md rounded-b-none text-white pr-2 pl-2 bg-[#C4DAD2] text-black');
      setInputButtonStyle('p-1 border-2 border-black rounded-md rounded-b-none text-grey pr-2 pl-2 hover:bg-[#C4DAD2] hover:text-black');
      setOutput(response.data.run.output.split("\n"));

    } catch (error) {
      console.log(error);
      setOutput(["Error in the Server"]);
    }
  }

  async function handleAICall(error){
    try {
      setAiHint(["Analysing Please Wait..."]);
      const response = await axios.post('http://localhost:3000/ai', {
        code: editorRef.current.getValue(),
        error: error,
      })

      console.log(response.data.hint);
      setAiHint(response.data.hint);

    } catch (error) {
      console.log(error);
      setAiHint("Error in the server");
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <Header language={language} onLanguageChange={handleLanguage} runCode={handleRunCode} AICall = {handleAICall} className="p-2" />
      <div className="flex flex-1 overflow-hidden">
        <MonacoEditor language={language} editorRef={editorRef} theme='vs-dark' className="w-full h-full" />
        
        <div className="w-full flex flex-col">
          <div className='p-2 pb-0 border-b-2 bg-black font-robotoMono font-semibold text-white flex flex-wrap'>
            <button className={inputButtonStyle} onClick={handleInputClick}>Input</button>
            <button className={outputButtonStyle} onClick={handleOutputClick}>Output</button>
          </div>
          {showOutput ? <Output output={output}/> : <Input input={input} handleInput={handleInput}></Input>}
          <AIbox AiHint={AiHint}/>
        </div>
      </div>
    </div>
  );
}

export default App;