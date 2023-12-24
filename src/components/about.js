import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Accordion Item #1',
    content:
      'This is the content for the first accordion item. It can contain any kind of HTML, including text, images, and links.',
    isOpen: false,
  },
  {
    title: 'Accordion Item #2',
    content:
      'This is the content for the second accordion item. Feel free to add as much information as you need!',
    isOpen: false,
  },
  {
    title: 'Accordion Item #3',
    content:
      'The possibilities are endless! Customize your accordion items with any information you want to share.',
    isOpen: false,
  },
];

export default function About() {
  const [accordionState, setAccordionState] = React.useState(accordionData);
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [btnText, setBtnText] = useState('Enable Dark mode');

  const toggleAccordion = (index) => {
    const updatedState = accordionState.map((item, i) =>
      i === index ? { ...item, isOpen: !item.isOpen } : item
    );
    setAccordionState(updatedState);
  };

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark mode');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Enable Light mode');
    }
  };

  return (
    <div className="accordion" id="accordionExample">
      <h1 className="my-3">About Us</h1>
      {accordionState.map((item, index) => (
        <div className="accordion-item" key={index} style={{ backgroundColor: myStyle.backgroundColor, border: '1px solid white' }}>
          <h2 className="accordion-header" id={`heading${index + 1}`}>
            <button
              className={`accordion-button btn btn-dark`}
              type="button"
              data-bs-toggle={`collapse${index + 1}`}
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={item.isOpen}
              aria-controls={`collapse${index + 1}`}
              onClick={() => toggleAccordion(index)}
              style={{ backgroundColor: myStyle.backgroundColor, border: '1px solid white', color: myStyle.color }}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
            aria-labelledby={`heading${index + 1}`}
            data-bs-parent="#accordionExample"
          >
            {item.isOpen && (
              <div className="accordion-body">{item.content}</div>
            )}
          </div>
        </div>
      ))}
      <div className="container my-3"></div>
      <button onClick={toggleStyle} type="button" className="btn btn-dark">
        {btnText}
      </button>
    </div>
  );
}
