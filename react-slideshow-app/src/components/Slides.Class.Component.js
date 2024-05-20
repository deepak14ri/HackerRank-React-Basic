import React, { Component } from 'react';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  next = () => {
    this.setState({ index: this.state.index + 1 });
  }

  previous = () => {
    this.setState({ index: Math.max(this.state.index - 1, 0) });
  }

  restart = () => {
    this.setState({ index: 0 });
  }

  render() {
    const { index } = this.state;
    const { slides } = this.props;
    const currentSlide = slides[index];
    const isRestartDisabled = index === 0;
    const isPrevDisabled = index === 0;
    const isNextDisabled = index === slides.length - 1;

    return (
      <div>
        <div id='navigation' className='text-center'>
          <button
            disabled={isRestartDisabled}
            onClick={this.restart}
            data-testid='button-restart'
            className='small outlined'
          >
            Restart
          </button>
          <button
            disabled={isPrevDisabled}
            onClick={this.previous}
            data-testid='button-prev'
            className='small'
          >
            Prev
          </button>
          <button
            disabled={isNextDisabled}
            onClick={this.next}
            data-testid='button-next'
            className='small'
          >
            Next
          </button>
        </div>

        <div id='slide' className='card text-center'>
          <h1 data-testid='title'> {currentSlide.title}</h1>
          <p data-testid='text'> {currentSlide.text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
