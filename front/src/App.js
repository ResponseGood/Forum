import React, { Component } from 'react';
import { Fetch } from 'react-request';
import './App.css';
import './components/News/News'
import logo from './logo.svg';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Fetch
        url="http://127.0.0.1:8000/auth/users/me/"
        onResponse={(error, response) => {
          if (error) {
            console.log(error);
          } else {
            console.log(JSON.stringify(response.data));
          }
        }}
      >
      </Fetch>
    </div>
  );
}

export default App;