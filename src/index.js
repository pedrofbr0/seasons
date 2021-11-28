import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

if(module.hot) {
  module.hot.accept();
}

const App = function() {

  window.navigator.geolocation.getCurrentPosition( //make the browser try to find geolocalization of user (sometimes asks the permission)
    (position) => console.log(position), //sucess callback, it's called when the function finds a position
    (err) => console.log(err) //failure callback, it's called when the function can't find the user's position
  );

  return ( 
  
    <div>
      <div>Bem vindo!!!!!</div>
      <SeasonDisplay />
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
