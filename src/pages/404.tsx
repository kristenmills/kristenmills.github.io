import React from 'react';
import { css } from '@emotion/core';

const container = css`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const header = css`
  font-size: 5.6rem;
  letter-spacing: -1px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

const subhead = css`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
`;

export default () => (
  <div css={container}>
    <h1 css={header}>404</h1>
    <h2 css={subhead}>Page Not Found</h2>
  </div>
);
