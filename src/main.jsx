import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js';
import { ThemeProvider } from '@mui/material';

import './main.css'
import '@fontsource/luckiest-guy';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
