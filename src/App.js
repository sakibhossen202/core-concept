import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    Name: "Dr. Saifullah Khan",
    Home: "Dhaka Mirpur"
  }
  var person2 = {
    Name: "Bikrom Ghosal",
    Home: "Gulistan Bosti"
  }
  var color = {
    color: "goldenrod",
    backgroundColor: "white"
  }
  const goodFriend = ["Robiul Islam", "Shimul Cricketer", "Bishal Akash", "Raihan Uddin Police", "Moin Khan", "Naimul Habib", "Niamul Islam", "Nasrin sultana Khusi Dadi"]
  const products = [
    { name: "Adobe Photoshop", price: "$120", Rating: "5 star" },
    { name: "Adobe Illustrator", price: "$96", Rating: "4.5 star" },
    { name: "Adobe Ebook Reader", price: "$5", Rating: "4.8 star" },
    { name: "Adobe Designer", price: "$65", Rating: "5 star" },
    { name: "Adobe premiere Pro", price: "$70", Rating: "4.7 star" }
  ]
  const productName = products.map(productName => productName.name)
  const productRating = products.map(productRating => productRating.Rating)

  console.log(productName)




  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React</h1>
        <Counter></Counter>
        <User></User>
        <ul>

          {

            goodFriend.map(singleFriendName =>
              <li>{singleFriendName}</li>

            )

          }
          {
            productName.map(singleProductName => <li>{singleProductName}</li>)
          }
          {
            productRating.map(productRating => <li>{productRating}</li>)
          }
        </ul>

        <Person name={goodFriend[0]} id="452" character="Honest & modest"></Person>
        <Person name="Bishal Akash" id="467" character="Not bad at all"></Person>
        <Person name="Robin Hossen" id="421" character="Pure Bacca"></Person>
        <Person name="Niloy Saha" id="401" character="Not sure"></Person>
        <Person name="Eshita Akter Nova" id="456" character="Good Girl"></Person>
        <Person name="Ahmed Seam" id="485" character="Excellent Boy"></Person>
        <Person name="Puja sikder" id="478" character="Good girl"></Person>
        <Person name="Sojol Hossen" id="447" character="Innocent Boy"></Person>
        <Person name="Niamul Islam" id="408" character="The Great Dhoincha"></Person>
        <Person name="Atika Akter" id="495" character="The Helper"></Person>

        {
          products.map(productName => <Product productName={productName}></Product>)
        }



      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid cyan",
    margin: "10px",
    boxShadow: "5px 5px 25px blue"

    , padding: "25px"
    , width: "700px"

    , borderRadius: "8px"
  }

  return (
    <div style={personStyle}>
      <h4>Student Name: {props.name} </h4>
      <h5>Student ID : {props.id} </h5>
      <h5>Student C. : {props.character}</h5>
      <p>Govt. M.M.college, Jashore</p>



    </div>
  )

}

function Product(props) {
  const productStyle = {
    border: "2px solid cyan",
    margin: "10px",
    boxShadow: "5px 5px 25px blue"

    , padding: "25px"
    , width: "700px"

    , borderRadius: "8px"
  }
  const btnStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "yellow"

  }
  const { name, price, Rating } = props.productName;
  return (
    <div style={productStyle}>
      <p>Available on online Shop</p>

      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{Rating}</p>

      <button style={btnStyle}>Buy Now</button>



    </div>
  )
}

function Counter() {
  const [Count, setCount] = useState(100);

  return (
    <div>
      <h1 id="count">Count: {Count} </h1>

      <button id="increaseValue" onMouseMove={() => setCount(Count - 1)} style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>Decrease</button> <br /> <br />
      <button id="increaseValue" onMouseMove={() => setCount(Count + 1)} style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>Increase</button>
    </div>


  )
}

function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
  },[])

  return (
    <div>
      <h3>User Name: {user.length} </h3>
      <ul>
        {/* {user.map(user => <li>{user.email}</li>)} */}
        {user.map(user => <li>{user.name}</li> )}
      </ul>
      
      
    </div>
  )
}
export default App;
