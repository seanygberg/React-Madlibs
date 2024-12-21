import React, { useState } from "react";

function MadlibForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        noun: "",
        adjective: "",
        noun2: "",
        color: "",
        place: "",
    })

    function handleDataChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const vals = Object.values(formData).some((val) => val.trim() === "");
        if (vals) {
            return;
        }
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit} >
          <label>
            Noun:
            <input
              type="text"
              name="noun"
              value={formData.noun}
              onChange={handleDataChange}
              required
            />
          </label>
          <br />
          <label>
            Adjective:
            <input
              type="text"
              name="adjective"
              value={formData.adjective}
              onChange={handleDataChange}
              required
            />
          </label>
          <br />
          <label>
            Noun 2:
            <input
              type="text"
              name="noun2"
              value={formData.noun2}
              onChange={handleDataChange}
              required
            />
          </label>
          <br />
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleDataChange}
              required
            />
          </label>
          <br />
          <label>
            Place:
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleDataChange}
              required
            />
          </label>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Create Story
          </button>
        </form>
    );
}

export default MadlibForm;