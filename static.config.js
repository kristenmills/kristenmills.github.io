import React from 'react';
import path from 'path';

export default {
  siteRoot: 'https://knm.dev',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    // 'react-static-plugin-emotion',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kristen Mills</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css"
          integrity="sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <script src="https://use.fontawesome.com/395ab5f79b.js" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
