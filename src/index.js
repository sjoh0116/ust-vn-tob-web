import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';

/* CSS */
import 'index.css';
import 'App.css';

/* 페이지 */
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


reportWebVitals();