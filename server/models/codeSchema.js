// models/codeSchema.js
import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  language: {
    type: String,
    required: true,
    match:
      /^(javascript|python|java|csharp|cpp|php|ruby|go|swift|typescript|bash|rust|kotlin|elixir|haskell|dart|clojure|julia|perl|lua|groovy|ocaml|fortran|pascal|emacs|fsharp|racket|scala|smalltalk|coffeescript|freebasic|nim|dragon|brainfuck|golfscript|husk|retina|yeethon|pyt|bqn|cjam|forte|lolcode|cow|japt|vlang|zig|dragon|osabie|prolog|purescript|samarium|dash|nasm|nasm64|file|paradoc|matl|cobol|befunge93|emojicode|retina|rockstar|powershell|fsi|forth|basic|basic\.net|csharp\.net|c|d|cpp|freebasic|elixir|ocaml|jelly|dart|nasal|lisp)$/,
  },
  code: {
    type: String,
    required: true,
  },
});

// Create and export the model
const Code = mongoose.model("Code", codeSchema);
export default Code;