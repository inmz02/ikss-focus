// import { useState } from 'react'

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
    <div className="w-3/5 lg:w-1/4 h-4/5 myOuterContainer rounded-lg p-3 ">
      <div className=" h-full bg-white rounded-lg py-7 px-2 border border-[lightgray] myInnerContainer">
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

        {/* To Do List Div */}
        <div className="entireToDoListContainer"></div>
      </div>
    </div>
  );
}

export default App;
