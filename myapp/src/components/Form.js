import React, { useState } from 'react'

function Form(props)  {
    const [text, setText] = useState('');

const handleUpClick = (e) =>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!", "success")
}

const handleLoClick = (e) =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")
}
const handleClearText = (e) =>{
    let newText = ''
    setText(newText)
    props.showAlert("Text cleared!", "success")
}
const handleCopy = () =>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!", "success")
}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Removed!", "success")
}
const handleOnChange = (e) =>{
    setText(e.target.value)

}

  return (

<>

  <div className="container">
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
  </div>
 
<button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowerrcase</button>
<button className='btn btn-primary mx-2' onClick={handleClearText} >Clear text</button>
<button className='btn btn-primary mx-2' onClick={handleCopy} >Copy text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces} >Remove extra spaces</button>
</div>
<div className="container my-3">
<h2 >Your text summary</h2>
<p>{text.split(' ').length} words and {text.length} characters</p>
<p>{0.008* text.split(' ').length} minutes take times to read.</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
  </>
  )
}
export default Form