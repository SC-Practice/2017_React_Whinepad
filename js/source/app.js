'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!deaders) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
    <h1>
        <Logo /> Welcome to The App!
        <Excel headers={headers} initialData={data} />
    </h1>,
    document.getElementById('app')
);