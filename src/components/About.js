import React from 'react';
import PropTypes from 'prop-types';
import { rulesText } from './game/Rules';

const Icon = ({ name, right }) => (
  // <span className={`icon is-large ${right ? 'slideRight' : 'slideLeft'}`}>
  <span className="icon is-large">
    <i className={`far fa-hand-${name}`}></i>
  </span>
);

class About extends React.PureComponent {

  state = {
    show: false,
    slide: -1
  }

  startShow = () => {
    this.setState({ show: true, slide: -1 });
    this.nextSlide();
  }

  nextSlide = () => {
    const next = this.state.slide + 1;

    if (next === rulesText.length) {
      this.setState({ show: false });
    } else {
      this.setState({ slide: next });
      setTimeout(this.nextSlide, 2000);
    }
  }

  render() {
    const { show, slide } = this.state;

    return (
      <div className="container has-text-centered has-text-weight-bold">
        {show
          ? <ul>
            {slide > -1 && rulesText.map((rule, index) => {
              return (
                <p key={index} className={`is-size-5 ${index === slide ? 'visible' : 'hidden'}`} style={{ height: '54px' }}>
                  <Icon name={rule[0]} right={false} />
                  <span>{rule[2]}</span>
                  <Icon name={rule[1]} right={true} />
                </p>)
            })}
          </ul>
          : <p>
            <span className="button is-large is-primary is-inverted" disabled={show} onClick={this.startShow}>
              What the fwig is that?
            </span>
          </p>}
      </div>
    );
  }
}

PropTypes.Header = {
  show: PropTypes.bool,
  slide: PropTypes.number
}

export default About;