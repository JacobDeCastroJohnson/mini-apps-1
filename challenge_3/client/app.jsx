// import React from '../public/react.development.js';
// import ReactDOM from '../public/react-dom.development.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    //THIS BINDING FOR APP METHODS Test 2
  }

  render() {
    return (
    <h1> Connected Front End to Server!!!</h1>
    )
  };

}

//ReactDOM Render
ReactDOM.render(<App />, document.getElementById('app'));


