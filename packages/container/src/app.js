import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <MarketingApp />
            </StylesProvider>
        </BrowserRouter>
    )
}
