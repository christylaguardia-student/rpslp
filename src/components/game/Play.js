import React from 'react';
import PropTypes from 'prop-types';
import { rules } from './Rules';

const Play = ({ handleClick }) => (
  <div className="container is-vcentered">
    <div className="level">
      {Object.keys(rules).map((name, index) => {
        return (
          <div key={index} className="level-item">
            <div>
              <p className="iconButton box" onClick={() => handleClick(name)}>
                <span className="icon is-large">
                  <i className={`far fa-hand-${name} fa-3x`}></i>
                </span>
              </p>
              <p className="heading">{name}</p>
            </div>
          </div>)
      })}
    </div>
  </div>
);

PropTypes.Play = {
  handleClick: PropTypes.func
}

export default Play;