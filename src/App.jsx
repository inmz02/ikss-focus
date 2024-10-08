// import { useState } from 'react'
import ToDoList from "./myComps/ToDoList";

// App is the main wrapper of all the contents
function App() {
  
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      // Enter fullscreen mode
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <div className="w-full md:w-3/5 lg:w-2/4 myOuterContainer rounded-none md:rounded-lg p-3 ">
      <div className=" h-full bg-white rounded-lg py-7 px-5 border border-[lightgray] myInnerContainer">
        {/* lace borders */}
        <div className="laceBorder tp"></div>
        <div className="laceBorder bt"></div>

        <h1 className="myTitle mt-1 mb-2">Isabelle's Korean Study Space</h1>

        {/* Buttons */}
        <div className="btns">
          <div className="btn add"></div>
          <div className="btn timer"></div>
          <div className="btn expand" onClick={toggleFullScreen}></div>
        </div>

        <div className="w-full">
          <div className="cat">
            <img src="https://64.media.tumblr.com/tumblr_lsr32n3zus1qhwcy0.gif" />
          </div>
        </div>

        <div className="border1"></div>

        {/* To Do List Div */}
        <div className="entireToDoListContainer">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
