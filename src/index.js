import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
    return(
        <h1>React Boilerplate</h1>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}