import React from 'react';
import { css } from '@emotion/core';
import Icon from '@mdi/react';
import { mdiFileAccount, mdiGithubCircle, mdiEmail, mdiLinkedinBox } from '@mdi/js';
import { shade } from 'polished';

const image = css`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const header = css`
  font-size: 5.6rem;
  letter-spacing: -1px;
  font-weight: 700;
  margin: 10px 0;
`;

const subhead = css`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  letter-spacing: -0.6px;
`;

const container = css`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const items = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const icon = css`
  fill: currentColor;
`;

const link = css`
  color: #83afe5;

  transition: color 225ms ease-in-out;

  &:hover {
    color: ${shade(0.15, '#83afe5')};
  }

  @media (prefers-color-scheme: dark) {
    color: #7fc1ca;
    &:hover {
      color: ${shade(0.15, '#7FC1CA')};
    }
  }
`;

const linkIcon = css`
  ${link};
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const Page: React.FC = () => (
  <div css={container}>
    <img
      css={image}
      src="https://s.gravatar.com/avatar/0034ccb021bfccfda0384426a7303502?s=300"
      alt=""
      aria-hidden
    />
    <h1 css={header}>Kristen Mills</h1>
    <p css={subhead}>
      Backend Engineer @{' '}
      <a css={link} href="https://superhuman.com" target="_blank" rel="noreferrer noopener">
        Superhuman
      </a>
    </p>
    <div css={items}>
      <a
        css={linkIcon}
        href="https://github.com/kristenmills"
        title="Github"
        aria-label="Github"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon css={icon} path={mdiGithubCircle} aria-hidden size="3.2rem" />
      </a>
      <a
        css={linkIcon}
        href="https://www.linkedin.com/in/millsk91"
        title="LinkedIn"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon css={icon} path={mdiLinkedinBox} aria-hidden size="3.2rem" />
      </a>
      <a
        css={linkIcon}
        href="mailto:kristen@knm.dev"
        title="email"
        aria-label="Email"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon css={icon} path={mdiEmail} aria-hidden size="3.2rem" />
      </a>
      <a
        css={linkIcon}
        href="resume.pdf"
        title="Resume"
        aria-label="Resume"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon css={icon} path={mdiFileAccount} aria-hidden size="3.2rem" />
      </a>
    </div>
  </div>
);

export default Page;
