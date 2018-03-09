import React from 'react';

const Scores = ({ scores, reset }) => (
  <div className="box has-text-centered" style={{ height: '100%' }}>
    <p className="title">Scores</p>

    <div className="columns is-mobile">
      <div className="column">
        <p>Round</p>
      </div>
      <div className="column">
        <p>You</p>
      </div>
      <div className="column">
        <p>Computer</p>
      </div>
    </div>

    {scores.map((score, index) => {
      return (
        <div key={index} className="columns is-mobile">
          <div className="column">
            <p>
              {score.winner === 'user'
                ? <span className="tag is-medium is-success"> win</span>
                : score.winner === 'computer' ? <span className="tag is-medium is-danger"> loss</span>
                  : <span className="tag is-medium is-info"> tie</span>}
            </p>
          </div>
          <div className="column">
            <span className="icon is-medium">
              <i className={`far fa-hand-${score.user} fa-lg`}></i>
            </span>
          </div>
          <div className="column">
            <span className="icon is-medium">
              <i className={`far fa-hand-${score.computer} fa-lg`}></i>
            </span>
          </div>
        </div>)
    })}

    <button className="button is-primary is-outlined" onClick={reset}>Reset</button>
  </div>
);

export default Scores;