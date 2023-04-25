import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app';

// mount function to startup the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if (onNavigate) history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.pathname;
            
            if (nextPathname !== pathname)history.push(pathname)
        }
    }
}

// if (development || isolation) call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() })
}

// if run through container => export
export { mount };
