import Component from 'react-react-lteadmin2';
import React from 'react';
import ReactDOM from 'react-dom';

require('react-react-lteadmin2/assets/index.css');

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Component name="click me!" onClick={() => alert('custom alert')} />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__component-content'));
