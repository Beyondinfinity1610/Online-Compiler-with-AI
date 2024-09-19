import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import MonacoEditor from './MonacoEditor';
import Header from './Header';
import Output from './Output';
import AIbox from './AIbox';

function App() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState("javascript");
  
  const [output, setOutput] = useState(null);
  const [AiHint, setAiHint] = useState(null);


  function handleLanguage(language) {
    setLanguage(language);
  }

  async function handleRunCode(){
    try {

      const response = await axios.post('http://localhost:3000/run', {
        code: editorRef.current.getValue(),
        language: language
      })
  
      setOutput(response.data.run.output.split("\n"));

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(output);
  }, [output])

  async function handleAICall(error){
    try {
      const response = await axios.post('http://localhost:3000/ai', {
        code: editorRef.current.getValue(),
        error: error,
      })

      console.log(response.data.hint);
      setAiHint(response.data.hint);

    } catch (error) {
      console.log(error);
    }
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