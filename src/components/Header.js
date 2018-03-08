import React from 'react';
import { rulesText } from './game/Rules';

const Text = () => (
  <section className="section">
    {rulesText.map((r, i) => <p key={i} className="is-size-5">{r}</p>)}
  </section>
);

class Header extends React.PureComponent {

  state = {
    show: false
  }

  toggle = () => this.setState({ show: !this.state.show })

  render() {
    const { show } = this.state;
    return (
      <header>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Rock Paper Scissors Lizard Spock
              </p>
              <p className="button is-medium is-primary is-inverted" onClick={this.toggle}>
                What the fwig is that?
              </p>
            </div>
          </div>
        </div>
        <div className={`container has-text-centered ${show ? 'showText' : 'hideText'}`}>
          {show && 
            <section className="section">
              {rulesText.map((r, i) =>
                <p key={i} className={`is-size-5 ${show ? 'showText' : ''}`}>{r}</p>)}
            </section>}
        </div>
      </header>
    );
  }
}

export default Header;