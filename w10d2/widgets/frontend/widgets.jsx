import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock'; //this is not a dependency
import Tabs from './tabs';

const panes = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
];

function Root() {
    return (
        <div>
            <Clock />
            <div className="interactive">
                <Tabs panes={panes} />
            </div>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
})