import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock'; //this is not a dependency
import Tabs from './tabs';

function Root() {
    return (
        <div>
            <Clock />
            {/* <Tabs /> */}
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
})