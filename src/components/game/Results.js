import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ score, results, handleClose }) => (
  <div className={`modal ${results === null ? '' : 'is-active'}`}>
    <div className="modal-background" onClick={handleClose}></div>
    <div className="modal-content has-text-centered">
      <div className="box">

      {score.computer &&
        <div>
          <p className="is-text-4">The Computer chose</p>
          <br />
          <div className="level-item">
            <div>
              <p className="box">
                <span className="icon is-large">
                  <i className={`far fa-hand-${score.computer} fa-3x`}></i>
                </span>
              </p>
              <p className="heading">{score.computer}</p>
            </div>
          </div>
        </div>}

        <p className="is-text-4">{results}</p>
        <br />
        {score.winner === 'user'
          ? <p className="title tag is-large is-success">You Won!</p>
          : score.winner === 'computer'
            ? <p className="title tag is-large is-danger">The Computer Won.</p>
            : <p className="title tag is-large is-info">It's a tie.</p>}

        <p className="buttons has-addons is-centered">
          {results &&
            <span>
              <span className="button is-medium is-primary"
                onClick={handleClose}>Rematch</span>
            </span>}
        </p>

      </div>
    </div>
  </div>
);

PropTypes.Results = {
  score: PropTypes.array,
  results: PropTypes.string,
  handleClose: PropTypes.func
}

export default Results;