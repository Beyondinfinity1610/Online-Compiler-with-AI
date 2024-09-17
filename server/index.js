import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function giveHints(code) {

    const prompt = `check this code ${code} and if there are any errors give me only the hint where the error is and guide me to think in the right way to debug it without directly giving me the answer.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}

app.post('/run', async (req, res) => {
    try {
        const code = req.body.code;

        console.log(code);

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

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
