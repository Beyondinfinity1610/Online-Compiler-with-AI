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
      setOutput(["Executing Please Wait..."]);
      const response = await axios.post('http://localhost:3000/run', {
        code: editorRef.current.getValue(),
        language: language
      })
  
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
        <MonacoEditor language={language} editorRef={editorRef} className="w-full h-full" />
        
        <div className="w-full flex flex-col">
          <Output output={output}/>
          <AIbox AiHint={AiHint}/>
        </div>
      </div>
    </div>
  );
}

export default App;