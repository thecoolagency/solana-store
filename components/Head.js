import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>TCA Storefront w/ Solana</title>
      <meta name="title" content="TCA Storefront" />
      <meta name="description" content="Buy items on my store using Solana Pay" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jonahlmadeya.com/" />
      <meta property="og:title" content="TCA Storefront" />
      <meta property="og:description" content="Buy items on my store using Solana Pay!" />
      <meta property="og:image" content="https://www.jonahlmadeya.com/files/yes.GIF" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jonahlmadeya.com/" />
      <meta property="twitter:title" content="TCA Storefront" />
      <meta property="twitter:description" content="Buy items on my store using Solana Pay!" />
      <meta property="twitter:image" content="https://www.jonahlmadeya.com/files/yes.GIF" />
    </Head>
  );
}
