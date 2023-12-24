import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import Textform from './components/Textform'; // Uncomment this line
import About from './components/about';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const mainStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div className="container" style={mainStyle}>
      <Navbar title="texttutils" aboutText="mywebsite" />
      <div className="mt-5">
        {/* <Textform heading="Enter the text to analyze below" isDarkMode={isDarkMode} /> */}
        <About />
        <button type="button" className="btn btn-dark float-end" onClick={toggleDarkMode}>
          {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default App;