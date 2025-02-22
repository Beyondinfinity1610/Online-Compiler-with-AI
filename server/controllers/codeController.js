import mongoose from "mongoose";
import axios from "axios";
import userSchema from "../models/userSchema.js";
import codeSchema from "../models/codeSchema.js";

// Use the singular model name consistently
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);

// Language versions mapping
const languageVersions = {
  python: "3.10.0",
  javascript: "18.15.0",
  java: "15.0.2",
  cpp: "10.2.0",
  // Add more language versions as needed
};

export async function executeCode(req, res, next) {
  const { code, stdin, language } = req.body;

  const apiUrl = "https://emkc.org/api/v2/piston/execute";

  const config = {
    language: language,
    version: languageVersions[language],
    stdin: stdin,
    files: [
      {
        content: code,
      },
    ],
  };

  try {
    const response = await axios.post(apiUrl, config, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error executing code:", error);
    res
      .status(500)
      .json({ error: "Error executing code", details: error.message });
  }
}

export async function getAllCode(req, res, next) {
  try {
    const { emailId } = req.query; // Now reading from query parameters
    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: "Email ID is required",
      });
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    const codes = await Code.find({
      _id: { $in: user.code },
    });

    res.status(200).json({
      success: true,
      data: codes,
    });
  } catch (error) {
    console.error("Error fetching user's code:", error);
    res.status(500).json({
      success: false,
      error: "Error fetching code snippets",
      details: error.message,
    });
  }
}

export async function getCodeByName(req, res, next) {
  try {
    const { codeName } = req.params;

    const code = await Code.findOne({ name: codeName }).populate({
      path: "user",
      select: "name emailId",
    });

    if (!code) {
      return res.status(404).json({
        success: false,
        error: "Code snippet not found",
      });
    }

    res.status(200).json({
      success: true,
      data: code,
    });
  } catch (error) {
    console.error("Error fetching code by name:", error);
    res.status(500).json({
      success: false,
      error: "Error fetching code snippet",
      details: error.message,
    });
  }
}

export async function saveCode(req, res, next) {
  try {
    const { name, language, code, emailId } = req.body; // emailId here is actually the email ID

    // Validate that the language matches the allowed patterns
    const languageRegex =
      /^(javascript|python|java|csharp|cpp|php|ruby|go|swift|typescript|bash|rust|kotlin|elixir|haskell|dart|clojure|julia|perl|lua|groovy|ocaml|fortran|pascal|emacs|fsharp|racket|scala|smalltalk|coffeescript|freebasic|nim|dragon|brainfuck|golfscript|husk|retina|yeethon|pyt|bqn|cjam|forte|lolcode|cow|japt|vlang|zig|dragon|osabie|prolog|purescript|samarium|dash|nasm|nasm64|file|paradoc|matl|cobol|befunge93|emojicode|retina|rockstar|powershell|fsi|forth|basic|basic\.net|csharp\.net|c|d|cpp|freebasic|elixir|ocaml|jelly|dart|nasal|lisp)$/;

    if (!languageRegex.test(language)) {
      return res.status(400).json({
        success: false,
        error: "Invalid programming language",
      });
    }

    // Find the user by email (emailId contains the email in this case)
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    // Create new code document
    const newCode = new Code({
      name,
      language,
      code,
    });

    // Save the code snippet
    const savedCode = await newCode.save();

    // Add the saved code's _id to the user's code array and save the user
    user.code.push(savedCode._id);
    await user.save();

    res.status(201).json({
      success: true,
      data: savedCode,
    });
  } catch (error) {
    console.error("Error saving code:", error);
    res.status(500).json({
      success: false,
      error: "Error saving code snippet",
      details: error.message,
    });
  }
}
