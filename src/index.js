import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
 render() {
   return (
     <div className="samplereact">This is a React component inside of Webflow!</div>
  )
}
}

ReactDOM.render(
React.createElement(App, {}, null),
document.getElementById('react-target')
);