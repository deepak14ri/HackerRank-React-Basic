import React, { useState } from 'react';

const Slides = ({slides}) => {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(i => i+1)
  }

  const previous = () => {
    setIndex(i => i-1)
  }

  const restart = () => {
    setIndex(0);
  }
  return (
    <div>
      <div id='navigation' className='text-center'>
        <button disabled={index === 0} onClick={() => restart()}
          data-testid='button-restart'
          className='small outlined'
        >
          Restart
        </button>
        <button disabled={index === 0} onClick={() => previous()} data-testid='button-prev' className='small'>
          Prev
        </button>
        <button disabled={index === slides.length-1} onClick={() => next()} data-testid='button-next' className='small'>
          Next
        </button>
      </div>

      <div id='slide' className='card text-center'>
        <h1 data-testid='title'> {slides[index].title}</h1>
        <p data-testid='text'> {slides[index].text}</p>
      </div>
    </div>
  );
};

export default Slides;
