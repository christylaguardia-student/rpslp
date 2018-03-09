import React from 'react';
import PropTypes from 'prop-types';
import { rulesText } from './game/Rules';

class Header extends React.PureComponent {

  state = {
    show: false,
    slide: -1
  }

  startShow = () => {
    this.setState({ show: true, slide: 0 });
    this.nextSlide();
  }

  nextSlide = () => {
    const next = this.state.slide + 1;

    if (next === rulesText.length) {
      this.setState({ show: false });
    } else {
      this.setState({ slide: next });
      setTimeout(this.nextSlide, 3000);
    }
  }

  render() {
    const { show, slide } = this.state;

    return (
      <header>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">
              Rock Paper Scissors Lizard Spock
              </p>
              <p>
                <span className="button is-medium is-primary is-outlined is-inverted"
                  style={{ display: `${show ? 'none' : 'block'}` }}
                  onClick={this.startShow}>
                  What the fwig is that?
                </span>
              </p>
            </div>
          </div>
        </div>

        <div id="rulesText" className="hero-body" style={{ display: `${show ? 'block' : 'none'}` }}>
          <div className="container has-text-centered">
            {slide > -1 && rulesText.map((rule, index) => {
              return (
                <div key={index} className={index === slide ? 'visible' : 'hidden'}>
                  {rule[0] &&
                    <p>
                      <span className="icon is-large">
                        <i className={`far fa-hand-${rule[0]} fa-lg`}></i>
                      </span>
                      <span className="icon is-large">
                        <i className={`far fa-hand-${rule[1]} fa-lg`}></i>
                      </span>
                    </p>}
                  <p>{rule[2]}</p>
                </div>)
            })}
          </div>
        </div>
      </header>
    );
  }
}

PropTypes.Header = {
  show: PropTypes.bool,
  slide: PropTypes.number
}

export default Header;