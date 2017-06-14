'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';

ReactDOM.render(
    <div style={ {padding: '20px'} }>
        <h1>Component discover</h1>

        <h2>Logo</h2>
        <div style={ {display: 'inline-block', background: 'purple'} }>
            <Logo />
        </div>
        
        <h2>Buttons</h2>
        <div>Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button></div>
        <div>A link: <Button href="http://react.js.com">Follow me</Button></div>
        <div>Customer class name: <Button className="custom">I do nothing</Button></div>
        { /*更多元件*/ }
    </div>,

    document.getElementById('pad')
);