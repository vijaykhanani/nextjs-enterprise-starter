import '../../styles/globals.css';
import '../../styles/index.css';
import type { AppProps } from 'next/app';
import AllProviders from '@providers';
import { Logger, UIInspector, ErrorBoundary } from '@utils';
import Head from 'next/head';
import * as React from 'react';

Logger.setLevel(process.env.NEXT_PUBLIC_LOGGER_LEVEL);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
    </Head>
    <ErrorBoundary>
      <AllProviders>
        <>
          <UIInspector />
          <Component {...pageProps} />{' '}
        </>
      </AllProviders>
    </ErrorBoundary>
  </>
);
export default MyApp;
