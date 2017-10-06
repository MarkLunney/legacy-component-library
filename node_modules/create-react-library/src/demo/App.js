import React from 'react';
import { Example, SecondExample } from '../lib';

var onSubmit = function(newCount) {
  alert('Count is ' + newCount);
}

const App = () => (
  <div>
    <Example title='Test Title' count={1} onSubmit={onSubmit} />
    <SecondExample />
  </div>
);

export default App;
