import {useRef,useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState();
  const inputRef = useRef();

  const handleSubmit = () => {
    setText(inputRef.current.value);
    inputRef.current.value = '';
  };

  const handleEdit= () => {
    inputRef.current.value = text;
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>useRef Demo</h1>
      <input type="text" placeholder='type your text here' ref={inputRef}/>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleEdit}>Edit</button>
      <h3>Your Text: {text}</h3>
    </div>
  );
}
export default App;
