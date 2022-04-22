import './Resturo.css';

import React from 'react';

export const Res=({handleChange,handleSubmit,sortrating})=>{
    return(
        <div className="main">
            <button onClick={sortrating}>sort high to low rating</button>
           
            <div id="inner">
            <h2>POST Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <input  onChange={handleChange} id="name" type="text" placeholder="Enter your Restaurant Name" />
                <input  onChange={handleChange} id="Image" type="text" placeholder="Enter your Restaurant IMAGE  link" />
                <input  onChange={handleChange} id="rating" type="number" step="any" placeholder="enter rating " />
                <input  onChange={handleChange} id="categorie" type="text" placeholder="enter categorie"/>
                <input  onChange={handleChange} id="min_amount"type="text" placeholder="enter min amount per head"/>
                <br></br>
                <input  onChange={handleChange} id="cash"  type="checkbox" />
                <label htmlFor="cash">Cash</label>
                <input  onChange={handleChange} id="upi" type="checkbox"/>
                <label htmlFor="upi">UPI</label>
                <input onChange={handleChange} id="card" type="checkbox"/>
                <label htmlFor="Card">Card</label>
                <input id="btn" type="submit"/>
            </form>
            </div>
        </div>
    )
}