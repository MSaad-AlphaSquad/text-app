import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const App = () => {
const [width , setWidth] = useState('');
const [height, setHeight] = useState('');
const [button , setButton] = useState(false);
const [input, setInput] = useState(false);
const [text, setText] = useState('');
const [data, setData] = useState([]);

useEffect(() => {
  console.log(data)
},[data])

  const handleMouseClick = (e) => {
    setWidth(e.clientX)
    setHeight(e.clientY)
    if (window.getSelection().toString().length > 1){
    setButton(!button)
  }
  }

  const buttonPostion = {
    left : width - 10 ,
    top : height - 40
  }
  
  const textBoxPosition = {
    left : width - (-20),
    top : height - 44
  }

  const handleButtonClick = () => {
    setInput(!input)
  }

  const handleCancel = () => {
    setButton(!button)
    setInput(!input)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }


  const handleSave = () => {
      setData([...data, {id : uuidv4() , name : text}])
      setText('')
      setInput(!input)
      setButton(!button)
      
  }



  return (
    <div className="bg-blue-200 pt-10 py-10">
    <div className="container mx-auto ">
    <div className="mx-20 my-20">
    <h1 className="text-2xl text-red-700 text-center my-5 font-bold">Select any Word or Phrase from the paragraph below ⬇</h1>
      <p className="relative" onMouseUp={(e) => handleMouseClick(e)}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      {button && <button style={buttonPostion} className="bg-black hover:bg-white hover:text-black rounded-full focus:outline-none text-white px-1.5  absolute border" onClick={() => handleButtonClick()}>+</button>}
      {input && <div style={textBoxPosition}  className="absolute border-black border-2 ">
        <input  className="w-24 text-sm py-1  focus:outline-none " value={text} onChange={(e) => handleText(e)} placeholder="Enter some text"></input>
        <button className="bg-black hover:bg-gray-400 hover:text-black border-white border-2 px-1 text-white rounded-md text-sm" onClick={handleSave}>Save</button>
        <button className="bg-black hover:bg-gray-400 hover:text-black border-white border-2 px-1 text-white rounded-md text-sm" onClick={handleCancel}>Cancel</button>
      </div>}
      </div>
    </div>
    </div>
  );
};

export default App;
