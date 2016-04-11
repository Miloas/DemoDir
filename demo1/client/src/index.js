'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

require('babel-polyfill');
ReactDom.render(
    <App />,
    document.getElementById('container')
);
