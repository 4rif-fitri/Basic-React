import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Testing from './components/testing';

function App() {
  const [getLimit,setLimit] = useState(0)
  const [myname,setMyname] = useState("Lorem")
  const inputNameRef = useRef(myname)

  useEffect(()=>{
    console.log("input ref" , inputNameRef.current.value);
    setMyname(inputNameRef.current.value);
    
  },[getLimit]) // render sekali selepas refest and getlimit berubah

  return (
    <React.Fragment>
      <center>
        <h1>{myname}{getLimit}</h1>
    
        {/* <input placeholder="name" onChange={(e) => setMyname(e.target.value)} /> */}
        <input placeholder="name" ref={inputNameRef}  defaultValue={inputNameRef.current}/><br />

        <button onClick={() => setLimit((prev) => prev + 1)}>
          naikkan Limit
        </button>
        {getLimit >= 1 ? (
          <button onClick={() => setLimit((prev) => prev - 1)}>
            kurangkan Limit
          </button>
        ) : (
          <></>
        )}
      </center>
      <Testing title="Title1" des="DES1" />
    </React.Fragment>
  );
}

export default App;
