import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const app = document.getElementById('app');


render(<App />, app);

if (module.hot) {
    module.hot.accept();
}