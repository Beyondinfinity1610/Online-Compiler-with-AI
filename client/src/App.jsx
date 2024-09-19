import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import MonacoEditor from './MonacoEditor';
import Header from './Header';
import Output from './Output';
import AIbox from './AIbox';

function App() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState("javascript");
  
  const [output, setOutput] = useState("");
  const [AiHint, setAiHint] = useState("");


  function handleLanguage(language) {
    setLanguage(language);
  }

  async function handleRunCode(){
    try {

      const response = await axios.post('http://localhost:3000/run', {
        code: editorRef.current.getValue(),
        language: language
      })
  
      if (response.error){
        setOutput(response.data.error);      
      } else {
        setOutput(response.data.run.output);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(output);
  }, [output])

  async function handleAICall(){

  }

  return (
    <div className="h-screen flex flex-col">
      <Header language={language} onLanguageChange={handleLanguage} runCode={handleRunCode} AICall = {handleAICall} className="p-2" />
      <div className="flex flex-1 overflow-hidden">
        <MonacoEditor language={language} editorRef={editorRef} className="w-1/2 h-full" />
        
        <div className="w-1/2 flex flex-col">
          <Output output={output}/>
          <AIbox AiHint={AiHint}/>
        </div>
      </div>
    </div>
  );
}

export default App;