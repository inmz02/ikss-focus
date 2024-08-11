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
    <div className="w-3/5 lg:w-2/4 h-[90%] myOuterContainer rounded-lg p-3 ">
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

        <div className="border1"></div>

        {/* To Do List Div */}
        <div className="entireToDoListContainer">
          <div className="myHeader">My To-Do List&nbsp; &nbsp; ₍ᐢ• ᴗ⁠ •ᐢ₎</div>
          <div className="inn-con">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis ipsum soluta dignissimos nobis hic, dolore quos ea laboriosam placeat consequuntur recusandae ratione nostrum incidunt architecto suscipit deserunt sapiente libero at fugiat atque obcaecati nam? Sequi commodi optio recusandae assumenda eveniet totam perferendis aliquid eligendi cumque molestias iure minus obcaecati nobis natus alias soluta, error cupiditate, ut quos a, unde accusamus delectus. Asperiores corrupti rerum rem quia officiis quo. Assumenda reiciendis saepe nulla cupiditate consequatur ducimus nemo dicta a inventore dolore voluptatem incidunt animi, earum ad unde vitae reprehenderit aut accusantium praesentium delectus. Dolore magni nesciunt voluptatem illo, harum eius iure quasi eaque veniam, voluptatibus alias libero, fugiat fuga non expedita iste eligendi quibusdam asperiores ratione assumenda? Rem iusto at optio obcaecati molestiae eveniet dolorum dolore pariatur assumenda vero sapiente, iure eum totam natus labore illo quo fugit reprehenderit rerum? Magni fugiat dolores porro pariatur labore deserunt corporis perferendis sed ducimus, tempora dignissimos mollitia velit, iste earum. Magnam maxime at inventore molestiae possimus sit mollitia eveniet, esse obcaecati molestias exercitationem, non repudiandae. Asperiores cumque, est maiores vero atque, quisquam minima distinctio aut consequuntur harum, autem ex. Ipsam voluptatum animi repudiandae accusamus minus ipsa itaque debitis, incidunt excepturi cupiditate sapiente doloremque quis consectetur blanditiis quos eius assumenda quam quas voluptates voluptatem repellat maxime! Assumenda expedita, distinctio placeat asperiores vitae perferendis aliquid unde nobis provident sed accusamus obcaecati illum maxime delectus vel quidem, et sapiente. Blanditiis ratione omnis delectus, modi, ab dignissimos vitae recusandae pariatur distinctio alias libero, neque minus reprehenderit! Aspernatur consequuntur iste quo aperiam repudiandae aliquid nesciunt impedit minima asperiores ratione, excepturi cupiditate similique obcaecati quasi autem doloremque ex velit unde! Dolor debitis nam tempora necessitatibus quod veritatis quidem expedita beatae fugiat impedit error asperiores soluta maiores ad commodi est nostrum, reiciendis aperiam. Fugit temporibus ea ipsa quod voluptatibus nam alias, iste velit fugiat perferendis culpa, commodi amet vero veniam at doloremque reprehenderit dignissimos repellat. Laboriosam fugit inventore dicta aut dolorum quidem, dolorem rerum quaerat eius fugiat similique atque quas id dolores. Fuga omnis maiores veniam, accusantium expedita consequatur aperiam aut odio! Quasi amet pariatur facilis iusto maiores totam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat nisi officia exercitationem officiis labore ipsam, quas ipsum nobis optio obcaecati veritatis minus, animi corrupti, pariatur ipsa rem a. Quasi quis aliquid fuga placeat corrupti ullam? Rerum deleniti tempora quos doloremque esse illum explicabo blanditiis consequatur, harum, minima atque, in praesentium incidunt numquam doloribus a error tempore. Voluptate ut cumque doloribus laboriosam excepturi provident dolor animi placeat at magnam maxime sit, suscipit quia esse laborum qui voluptatum amet quasi? Possimus quasi placeat est dolorum porro at reiciendis quas? Iure, libero accusamus reiciendis consectetur molestias dolores eveniet dolorem dicta nam tempora?</div>
        </div>
      </div>
    </div>
  );
}

export default App;
