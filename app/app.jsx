
import React from 'react';
import ReactDOM from 'react-dom';


const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <Route path="/" component={MainComponent} /> */}
        </HashRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    console.log('e')
    ReactDOM.render(<h1>App</h1>, rootEl);
});