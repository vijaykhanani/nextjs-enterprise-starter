import '../../styles/globals.css';
import '../../styles/index.css';
import type { AppProps } from 'next/app';
import AllProviders from '@providers';
import { Logger, UIInspector, ErrorBoundary } from '@utils';

Logger.setLevel(process.env.NEXT_PUBLIC_LOGGER_LEVEL);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ErrorBoundary>
    <UIInspector />
    <AllProviders>
      <Component {...pageProps} />
    </AllProviders>
  </ErrorBoundary>
);
export default MyApp;
