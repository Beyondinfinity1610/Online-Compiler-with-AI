import { useState, useEffect } from 'react';
import MonacoEditor from './MonacoEditor';
import LanguageSelector from './LanguageSelector';
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

  useEffect(() => {
    console.log("Updated code:", code);
  }, [code]);

  return (
    <div className="h-screen flex flex-col">
      <LanguageSelector language={language} onLanguageChange={handleLanguage} className="p-2" />
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