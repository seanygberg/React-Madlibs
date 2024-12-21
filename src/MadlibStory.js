import React from "react";

function MadlibStory({ data, onRestart }) {
    const { noun, adjective, noun2, color, place } = data;
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Your MadLib</h1>
            <p>
                The {adjective} {noun} danced with the {color} {noun2} at the {place}
            </p>
            <button onClick={onRestart}>
                Restart
            </button>
        </div>
    );
}

export default MadlibStory;