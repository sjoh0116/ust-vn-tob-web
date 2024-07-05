import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import ScrollToTop from 'hooks/ScrollTop';

/* CSS */
import 'index.css';
import 'App.css';

/* 페이지 */
import App from '/App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <ScrollToTop/>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <ScrollToTop/>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>,
    rootElement
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();