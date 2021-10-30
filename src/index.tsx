import { ThemeProvider } from '@mui/system';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from "./Root";
import { theme } from "./Styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
