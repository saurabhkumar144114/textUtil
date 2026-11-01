import React, { useState } from 'react'

export default function TextForm(props) {

  const haldleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to UpperCase", "success");
  }
  const haldleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to LowerCase", "success");
  }
  const haldleclearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Clear Text", "success");
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    console.log('Copied');
    props.showAlert("Copy Text", "success");
  }



  const handleDownloadClick = () => {
    const blob = new Blob([text], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'mytext.txt';
    link.click();

    URL.revokeObjectURL(url);
    props.showAlert("Download Text", "success");

  };

  const handleOnChange = (event) => {
    console.log("on change");

    setText(event.target.value)

  }
  const [text, setText] = useState('');
  return (

    <div className="container m-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading} - </h1>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? '#011322' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}id="exampleFormControlTextarea1" rows="8"></textarea>
        <button onClick={haldleUpClick} className="btn btn-primary mt-3 me-2">Convert to UpperCase</button>
        <button onClick={haldleLoClick} className="btn btn-primary mt-3 ">Convert to LowerCase</button>
        <button onClick={haldleclearClick} className="btn btn-primary mt-3 mx-2">Clear Text</button>
        <button onClick={handleCopyClick} className="btn btn-primary mt-3 mx-2">Copy Text</button>
        <button onClick={handleDownloadClick} className="btn btn-primary mt-3 mx-2">Downoad Text</button>
      </div>
      <div className="cont mt-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} letter charecters</p>
        <p>{0.008 * text.split("").length} minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>







  )
}
