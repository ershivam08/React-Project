import { useState } from 'react'
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './App.css';
 function App() {
  let [city, setCity]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("City entered:", city);
    setCity("");
  };


  let handleChange = (e)=>{
    setCity(e.target.value);
  }

  return (

    <div className="searchbox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="city-name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default App;