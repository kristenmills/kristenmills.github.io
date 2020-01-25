import * as React from 'react';
import { css, Global } from '@emotion/core';

import { Root, Routes } from 'react-static';

const wrapper = css`
  width: 100%;
  min-height: 100vh;
`;

const globals = css`
  h1 {
    padding-top: 10px;
    margin-bottom: 0px;
  }

  body {
    padding-top: 50px;
    font-family: 'Raleway', sans-serif;
    color: grey;
  }

  .fa {
    padding: 0 5px;
  }

  a:hover {
    text-decoration: none;
  }
`;

const App: React.FC = () => (
  <Root>
    <Global styles={globals} />
    <React.Suspense fallback={<div />}>
      <div css={wrapper}>
        <Routes />
      </div>
    </React.Suspense>
  </Root>
);

export default App;
