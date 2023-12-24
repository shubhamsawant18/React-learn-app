import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(" n");
  const [isCursive, setIsCursive] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    setIsCursive(false);
  };

  const handleloClick = () => {
    setText(text.toLowerCase());
    setIsCursive(false);
  };

  const handleClear = () => {
    setText("");
    setIsCursive(false);
  };

  const handleCursive = () => {
    setIsCursive(true); // Toggle the cursive state
  };

  function handleOnChange(event) {
    setText(event.target.value);
    setIsCursive(false);
  }

  const textStyle = {
    fontStyle: isCursive ? 'italic' : 'normal',
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          style={textStyle}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="3"
        />
        <button onClick={handleUpClick} className="btn btn-primary mx-2">
          Convert to uppercase
        </button>
        <button onClick={handleloClick} className="btn btn-primary mx-2">
          Convert to lowercase
        </button>
        <button onClick={handleClear} className="btn btn-primary mx-2">
          Clear
        </button>
        <button onClick={handleCursive} className="btn btn-primary mx-2">
           Cursive
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
