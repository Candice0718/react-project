import React from 'react';
import ReactDom from 'react-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout.js';
import './index.css';

ReactDom.render(
    <Provider store={store}>
        <Layout></Layout>
    </Provider>
, document.getElementById("root"));