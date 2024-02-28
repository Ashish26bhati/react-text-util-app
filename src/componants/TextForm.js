// import { useState } from "react"
import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpclick= ()=>{
    // console.log('toUppercase button click' + text);
    let newtext= text.toUpperCase();
    sateText(newtext);
  }
  const handleLowclick= ()=>{
    // console.log('toUppercase button click' + text);
    let newtext= text.toLowerCase();
    sateText(newtext);
  }
  const handleClearclick= ()=>{
    // console.log('toUppercase button click' + text);
    let newtext="";
    sateText(newtext);

  }
  const handleOneChange= (event)=>{
    // console.log("on change");
    sateText(event.target.value);
  }
  const handleCopy= ()=>{
    let textcopy = document.getElementById('myBox');
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
  }
  const removeExtraSpace= ()=>{
    let newtext = text.split(/[  ]+/);
    sateText(newtext.join(" "))

  }
const[text,sateText]= useState('');

  return (
      <>
        <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}- </h1>
          <div className="mb-3">
              {/* <label for="myBox" className="form-label">{props.heading}</label> */}
              <textarea className="form-control" id="myBox" rows="8" value={text} style={{background :props.mode==='dark'?'#121212':'white', color:props.mode==='dark'?'white':'black'}}  onChange={handleOneChange}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Upeercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearclick}>clear text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space </button>
          </div>
          <div className="container my-5 " style={{color :props.mode==='dark'?'white':'black'}}>
            <h2>Your Word Summery</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter Your text'}</p>
          </div>
      </>
  )
}
