import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSVLink} from "react-csv";

const paragraph1 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
const paragraph2 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
const content = paragraph1 + paragraph2

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [button, setButton] = useState(false);
  const [input, setInput] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  
  

  // const list = content.split()

  useEffect(() => {

    console.log(data);

  },[data]);

  

  const handleMouseClick = (e) => {
    setSelectedText(window.getSelection().toString());
    setWidth(e.clientX);
    setHeight(e.clientY);
    if (window.getSelection().toString().length > 1) {
      setButton(!button);
    }
  };

  const buttonPostion = {
    left: width - 10,
    top: height - 40,
  };

  const textBoxPosition = {
    left: width - -20,
    top: height - 44,
  };

  const handleButtonClick = () => {
    setInput(!input);
  };

  const handleCancel = () => {
    setButton(!button);
    setInput(!input);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    if(text.length > 0){
    setData([...data, { id: uuidv4(), selectedText : selectedText , addedText: text}]);
    // setStoreKey(storeKey + 1);
    // setValue(selectedText)
    setText("");
    setSelectedText("")
    setInput(!input);
    setButton(!button);
    }
    else {
      alert("Please enter something")
    }
  };

  return (
    <div className="bg-blue-200 pt-10 py-10 bg-opacity-70">
      <div className="container mx-auto ">
        <div className="mx-20 my-20">
          <h1 className="text-2xl text-red-700 text-center my-8 font-bold">
            Select any Word or Phrase from the paragraph below ⬇
          </h1>
          <p className="relative" onMouseUp={(e) => handleMouseClick(e)}>
           {content}
          </p>
          {button && (
            <button
              style={buttonPostion}
              className="bg-black hover:bg-white hover:text-black rounded-full focus:outline-none text-white  absolute border"
              onClick={() => handleButtonClick()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
          {input && (
            <div
              style={textBoxPosition}
              className="absolute border-black border-2 rounded-lg	"
            >
              <input
                className="w-24 py-1 px-1 focus:outline-none rounded-lg"
                value={text}
                onChange={(e) => handleText(e)}
                placeholder="Enter text"
              ></input>
              <div className="float-right">
                <button
                  className="bg-black hover:bg-gray-400 hover:text-black border-white border-2  text-white rounded-md px-1 my-1"
                  onClick={handleSave}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
                <button
                  className="bg-black hover:bg-gray-400 hover:text-black border-white border-2  text-white rounded-md px-1 my-1"
                  onClick={handleCancel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="transform hover:scale-110 motion-reduce:transform-none shadow-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-10 py-2  mx-20 text-center w-48 text-white rounded-3xl">
        <CSVLink data={data} filename="data.csv" className="">Download file</CSVLink>
        </div>
      </div>
    </div>
  );
};

export default App;
