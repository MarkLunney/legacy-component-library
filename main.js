var React = require('react');
var ReactDOM = require('react-dom');
var components = require('create-react-library');

var TestComponent = function (props) {
    var data = props.data || {};
    return React.createElement('div', null, data);
}

var init = function () {
    console.log('---Init Legacy Component Loader---');

    var legacyData = "Data generated from the legacy app."

    /**
     * Creates a simple React component and renders it to the page.
     */
    ReactDOM.render(
        React.createElement(TestComponent, { data: legacyData }),
        document.getElementById("components")
    );

    /**
     * Renders a React component from a library.
     * Note that the library component was build in 
     * webpack & JSX, but here we can just use legacy
     * JavaScript as it has already been transpiled.
     */
    ReactDOM.render(
        React.createElement(components.Example, { title: legacyData }),
        document.getElementById("library-components")
    );
}

init();