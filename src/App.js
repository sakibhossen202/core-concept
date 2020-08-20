import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    Name:"Dr. Saifullah Khan",
    Home:"Dhaka Mirpur"
  }
  var person2 = {
    Name:"Bikrom Ghosal",
    Home:"Gulistan Bosti"
  }
  var color ={
    color:"goldenrod",
    backgroundColor:"white"
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Learning React</h1>

      <Person name="Sakib Hossen" id="502" character="good"></Person>
      <Person name="Bishal Akash" id="467" character="Not bad at all"></Person>
      <Person name="Robin Hossen" id="421" character ="Pure Bacca"></Person>
      <Person name="Niloy Saha" id="401" character="Not sure"></Person>
      <Person name="Cricketer Boy Shimul" id="405" character="Pure Bacca"></Person>
      
      
       
        
      </header>
    </div>
  );
}
  
function Person(props) {
  const personStyle ={
    border:"2px solid cyan",
    margin:"10px"
  }
  return( 
  <div style = {personStyle}>
      <h4>Student Name: {props.name} </h4>
      <h5>Student ID : {props.id} </h5>
  <h5>Student C. : {props.character}</h5>
      <p>Govt.M.M.college,jashore</p>
      
   
    
  </div>
  ) 
  
} 

export default App;
