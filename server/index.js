import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import languageVersions from "./languageVersion.js";


dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function giveHints(code, error) {
    const prompt = `check this code ${code} and it shows these errors ${error} give me only the hint where the error is and guide me to think in the right way to debug it without directly giving me the answer. it there are no errors then just say "There are no errors in this code." and nothing else how many times i ask.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}

app.post('/ai', async (req, res) => {
    try {
        const { code, error } = req.body;
        console.log(code);
        console.log(error);

        if (!code){
            return res.status(400).json({ error: "No code provided" })
        }

        const hint = await giveHints(code);
        return res.json({ hint: hint });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to generate hints' });
    }
});

// app.post('/run', async (req, res) => {
//     const { code, language } = req.body;
    
//     const apiUrl = 'https://api.jdoodle.com/v1/execute';
//     const config = {
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         script: code,
//         language: language, 
//     };
    
//     try {
//         const response = await axios.post(apiUrl, config);
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error executing code:', error);
//         res.status(500).send('Error executing code');
//     }
    
//     console.log("code: ", code, "language: " , language);
// })

app.post('/run', async (req, res) => {
    const { code, language } = req.body;
    
    const apiUrl = 'https://emkc.org/api/v2/piston/execute';

    const config = {
        language: language,
        version: languageVersions[language],
        files: [
            {
                content: code,
            }
        ]
    };
    
    try {
        const response = await axios.post(apiUrl, config, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error executing code:', error);
        res.status(500).json({ error: 'Error executing code', details: error.message });
    }
    
    console.log("code: ", code, "language: " , language);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});