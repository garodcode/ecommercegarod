import './App.css';
import * as React  from 'react';
import HeaderBar  from './components/header';
import ListView from './components/list';
import { getProductsApi } from './controller/controller';

function App  () {
  const [listProducts, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  /*React.useEffect = () => {
    //Call list products API
    if (listProducts !== null){
      //setProducts([]);
      getProductsApi(setProducts);
    }
  };*/

  React.useEffect(() => {
    getProductsApi(setLoading,setProducts);
  }, []);

  /**
   * 
   import React, { useEffect, useState } from "react";
//import "./App.css";

const DemoFetchZ = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (
        <div>
          - Fetch
          <br />
          <span>Title: {todo ? todo.title : "no Title Found"}</span>
        </div>
      )}
    </>
  );
};
   */

  return (
    <div className="App">
        <HeaderBar />
        <ListView list={listProducts}/>
    </div>
  );
}

export default App;
