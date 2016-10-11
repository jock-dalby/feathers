const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/app')


// const socket = io(); //"http://localhost:3030"
// const app = feathers()
//   .configure(feathers.socketio(socket))
//   .configure(feathers.hooks())
//   // Use localStorage to store our login token
//   .configure(feathers.authentication({
//     storage: window.localStorage
//   }));

ReactDOM.render(<App />, document.getElementById('main'));

// app.authenticate().then(() => {
//   ReactDOM.render(<HomePage />, document.querySelector('#main'));
// }).catch(error => {
//   if(error.code === 401) {
//     window.location.href = '/login.html'
//   }
//
//   console.error(error);
// });
