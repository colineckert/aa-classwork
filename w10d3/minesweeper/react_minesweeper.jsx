import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game'

document.addEventListener('DOMContentLoaded', () => {
    const reactRoot = document.getElementById('react-root');
    ReactDOM.render(<Game/>, reactRoot);
});