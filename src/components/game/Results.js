import React from 'react';

const Results = ({ score, results, handleClose }) => {
  console.log('results', results);
  console.log('score', score);

  let modalBackgroundColor = '';
  if (score.winner === 'user') modalBackgroundColor = 'is-success';
  if (score.winner === 'computer') modalBackgroundColor = 'is-danger';

  return (
    <div className={`modal ${results === null ? '' : 'is-active'}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content has-text-centered">
        <div className={`box ${modalBackgroundColor}`}>

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
          <p className="title">
            {score.winner === 'user'
              ? 'You Won!' : score.winner === 'computer'
                ? 'The Computer Won.' : ''}
            </p>

          <p className="buttons has-addons is-centered">
            {results &&
              <span>
                <span className="button is-medium is-warning"
                  onClick={handleClose}>Rematch</span>
              </span>}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Results;