var React = require('react');
var ReactDOM = require('react-dom');
var components = require('create-react-library');

var renderExample = function (title, count, onSubmit) {
    /**
     * Renders a React component from a library.
     * Note that the library component was built in 
     * webpack & JSX, but here we can just use legacy
     * JavaScript as it has already been transpiled.
     */
    ReactDOM.render(
        React.createElement(components.Example, { title: title, count: count, onSubmit: onSubmit }),
        document.getElementById("library-components")
    );
}


var onSubmit = function (currentCount) {
    alert("Current count is " + currentCount);
}

var count = 0;

var fetchData = function() {
    /**
     * Simulate a network request
     */
    setInterval(function() {
        count++;
        renderExample("New data fetched from the legacy app", count, onSubmit);
    }, 2000)
}

var init = function () {
    console.log('---Init Legacy Component Loader---');

    var legacyData = "Initializing Application..."

    renderExample(legacyData, count, onSubmit);

    fetchData();
}

init();