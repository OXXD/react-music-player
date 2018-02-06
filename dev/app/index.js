// var react = require('react');
// console.log(react.version);
// 导入了 babel-loader 可以使用 es6 的 import
import React from 'react'
// import './index.less'
import { render } from "react-dom";
import { AppContainer } from 'react-hot-loader';
// import Hello from './components/hello'
import Root from './root'

// console.log(React.version);

render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}