import React from "react";

const AIPrompt = ({ AiPrompt, handleAiPrompt }) => {
  return (
    <div className="text-[#ECDFCC] font-robotoMono">
      <textarea
        className="h-[40vh] bg-[#161e18] w-full text-[#ECDFCC] p-2 pt-1 m-0"
        placeholder="Enter the prompt to give more context about your code"
        onChange={handleAiPrompt}
        value={AiPrompt}
      ></textarea>
    </div>
  );
};

export default AIPrompt;