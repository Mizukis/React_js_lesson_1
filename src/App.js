import React, {useState} from "react";
import './App.css';
import MyComponent from "./MyComponent";
import Message from "./Message";

function App() {

  const [inputText, setInputText] = useState('');

  return (
    <div className="wrapper">
      <span className='myComp'>Hello World! It's working</span>

      <Message textToShow="I love ReactJS"/>

      <input value={inputText} onChange={e => setInputText(e.target.value)} style={{color:"red", width:300,}}/>
      <MyComponent textToShow={inputText}/>

    </div>
  );
}

export default App;
