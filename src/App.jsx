// import { useState } from 'react'

// App is the main wrapper of all the contents
function App() {
  return (
    <div className="w-2/5 h-4/5 myOuterContainer rounded-lg p-3 ">
      <div className=" h-full bg-white rounded-lg py-7 px-2 border border-[lightgray] myInnerContainer">
        {/* lace borders */}
        <div className="laceBorder tp"></div>
        <div className="laceBorder bt"></div>

        <h1 className="myTitle mt-1 mb-2">Isabelle's Korean Study Space</h1>

        {/* Buttons */}
        <div className="btns">
          <div className="btn add">
            <img src="assets/btn1.png" />
          </div>
          <div className="btn timer">
            <img src="assets/btn1.png" />
          </div>
        </div>
        
        
        {/* To Do List Div */}
        <div className="entireToDoListContainer">

        </div>
      </div>
    </div>
  );
}

export default App;
