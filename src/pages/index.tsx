import React from 'react';

export default () => (
  <div className="container">
    <div className="text-xs-center">
      <img
        className="img-circle"
        src="https://s.gravatar.com/avatar/0034ccb021bfccfda0384426a7303502?s=150"
        alt=""
      />
      <h1 className="display-4">Hi, I'm Kristen Mills</h1>
      <p className="lead">
        I'm a software engineer at <a href="https://postmates.com">Postmates</a> who graduated from{' '}
        <a href="https://rit.edu">RIT</a> in 2016.
      </p>
      <a href="https://github.com/kristenmills" title="Github">
        <i className="fa fa-github fa-2x" aria-hidden="true" />
      </a>
      <a href="mailto:kristen@knm.dev" title="Email">
        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
      </a>
      <a href="resume.pdf" title="Resume">
        <i className="fa fa-file fa-2x" aria-hidden="true" />
      </a>
    </div>
  </div>
);
