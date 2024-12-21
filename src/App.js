import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import './App.css';

function App() {
  const [storyData, setStoryData] = useState(null);

  function handleSubmit(data) {
    setStoryData(data);
  };
  
  function handleRestart(data) {
    setStoryData(null);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Madlibs Game</h1>
      {!storyData ? (
        <MadlibForm onSubmit={handleSubmit} />
      ) : (
        <MadlibStory data={storyData} onRestart={handleRestart} />
      )}
    </div>
  );
  
}

export default App;
