import React from 'react'
import './hello.less'

let Hello = React.createClass({
    render() {
        return (
            <div className="hello-component">Hello World, React and Webpack</div>
        );
    }
});

export default Hello;