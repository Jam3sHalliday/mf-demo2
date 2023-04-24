import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// mount function to startup the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// if (development || isolation) call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if (devRoot) mount(devRoot)
}

// if run through container => export
export { mount };
