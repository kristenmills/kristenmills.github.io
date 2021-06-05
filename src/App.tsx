import * as React from 'react';
import { css, Global } from '@emotion/core';

import { Root, Routes } from 'react-static';
import normalize from 'emotion-normalize';

const wrapper = css`
  width: 100vw;
  height: 100vh;
`;

const globals = css`
  ${normalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Work Sans', sans-serif;
    color: #556873;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media (prefers-color-scheme: dark) {
      color: #c5d4dd;
      background-color: #3c4c55;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *:focus {
    outline: none;
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
