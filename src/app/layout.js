'use client';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { CommonProvider } from '@/commons/contexts/CommonContext';
import SiteTitle from '@/commons/components/SiteTitle';
import { theme } from '../theme';
import '../i18n';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 13px;
  }

  body {
    margin: 0;
  }
`;

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CommonProvider>
        <html lang="en">
          <head>
            <SiteTitle />
          </head>
          <body>{children}</body>
        </html>
      </CommonProvider>
    </ThemeProvider>
  );
}
