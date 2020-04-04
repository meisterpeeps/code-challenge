import React from 'react';
import ReactDOM from 'react-dom';

import { Main} from "./components/Main";
import { ContextProvider } from './components/Context'

ReactDOM.render(
    <ContextProvider>
        <Main/>
    </ContextProvider>,
    document.getElementById("ReactApp")
);