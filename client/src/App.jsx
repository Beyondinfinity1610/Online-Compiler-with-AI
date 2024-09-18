import { useState, useEffect } from 'react';
import axios from "axios";
import MonacoEditor from './MonacoEditor';
import Header from './Header';
import Output from './Output';
import AIbox from './AIbox';

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  
  function handleChange(value) {
    setCode(value);
  }

  function handleLanguage(language) {
    setLanguage(language);
  }

  async function handleApiCall(){
    
  }

  useEffect(() => {
    console.log("Updated code:", code);
  }, [code]);

  return (
    <div className="h-screen flex flex-col">
      <Header language={language} onLanguageChange={handleLanguage} runCode={handleApiCall} className="p-2" />
      <div className="flex flex-1 overflow-hidden">
        <MonacoEditor language={language} codeChange={handleChange} className="w-1/2 h-full" />
        
        <div className="w-1/2 flex flex-col">
          <Output/>
          <AIbox/>
        </div>
      </div>
    </div>
  );
}

export default App;