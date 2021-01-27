import './App.css'
import Name from '../components/Name/Name';
import React, { useState } from 'react';

const App = () =>{
  const [nameState, nameSetState] = useState({
    nombre: "",
    backgroundColor: "#e24958",
    color: "#e24305",
  });

  const nameChangeHandler = (event) =>{
    const newState = {...nameState};
    const newName = event.target.value;
    newState.nombre = newName;
    nameSetState(newState);
  };

  const backgroundColorHandler = () => {
    const newBackgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const newBackgroundColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const newState = {...nameState}
    newState.backgroundColor = newBackgroundColor;
    newState.color = newBackgroundColor2;
    nameSetState(newState);
  };

  return(
    <div className="App">
      <Name 
        name={nameState.nombre}
        onChange={nameChangeHandler}
        bgColor={nameState.backgroundColor}
        fcolor={nameState.color}
      />
      <br/>
      <button onClick={backgroundColorHandler} style={{marginTop: "4px"}}>Change Color</button>
    </div>
  )
}

export default App;
