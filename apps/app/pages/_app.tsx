import { AppProps } from 'next/app';
import Head from 'next/head';
import '../lib/styles/reset.scss';
import '../lib/styles/root.scss';
import '../lib/styles/global.scss';
import { ThemeProvider } from '@emotion/react';
import { MUI_THEME } from '../lib/constants/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app!</title>
      </Head>

      <ThemeProvider theme={MUI_THEME}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
