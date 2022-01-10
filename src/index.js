import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot) {
  module.hot.accept();
}

// with the functional component, we don't need to use the render method
// ReactDOM.render(<App />, document.querySelector('#root'));

// with the functional component, we don't have a good way to wait for
// the responses from the callbacks to the getCurrentPosition function
// Therefore, we need to use class componenets

// Declaring a class component: react expects a class component to have a render method
// and a bunch of other methods. That's why we extend React.Component.

// The best place/moment to initailize the state is in the constructor

// It's not a good idea to use the state in the render method. In fact, it's not 
// the best practice to do some "work", requests, inside of a render method, because
// it will be called every time the component is rendered.

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY SITUATION we do direct
    // assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
      // we called setState to update the state
      this.setState({ lat: position.coords.latitude});

      //Don't ever do this:
      // this.state.lat = position.coords.latitude;
    },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );

  }


  render() {

    return (
    <div>
      Latitude: {this.state.lat}
      <br />
      Error: {this.state.errorMessage}
    </div>
    );
  }
}

// const App = function() {

//   window.navigator.geolocation.getCurrentPosition( //make the browser try to find geolocalization of user (sometimes asks the permission)
//     (position) => console.log(position), //sucess callback, it's called when the function finds a position
//     (err) => console.log(err) //failure callback, it's called when the function can't find the user's position
//   );

//   return ( 
  
//     <div>
//       <div>Bem vindo!!!!! </div>
//       <SeasonDisplay />
//     </div>

//   );
// };

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
