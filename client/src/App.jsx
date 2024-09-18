import { useState, useEffect } from 'react';
import axios from "axios";
import MonacoEditor from './MonacoEditor';
import Header from './Header';
import Output from './Output';
import AIbox from './AIbox';

function App() {
  const clientID = "a2c00fc401948c55056dcb7ed05d421e";
  const clientSecret = "b9c129fa0ac680850349546a734c11c33e3aef68e89eace1b0f02c03a21ed0f9";

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  
  const config = {
    clientId: clientID,
    clientSecret: clientSecret,
    script: code, 
    language: language,
};
  
  function handleChange(value) {
    setCode(value);
  }

  function handleLanguage(language) {
    setLanguage(language);
  }

  async function handleApiCall(){
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute';

    try {
      const response = await axios.post(apiUrl, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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