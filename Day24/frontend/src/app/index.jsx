import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter } from 'react-router-dom'
import rootSaga from './sagas'

import '@fontsource/roboto'
import InitFontawesome from './fontawesome'
InitFontawesome()


import './styles/main'
import Main from './containers/Main'

const store = configureStore()
store.runSaga(rootSaga)
render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
