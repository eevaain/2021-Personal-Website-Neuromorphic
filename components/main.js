import Head from "next/head";
import "@fontsource/playfair-display/500.css"

export default function Main() {

    return (
      <>
      <div className="flex flex-col place-self-center ">

        <div className="relative">
          <img className = "rounded-md h-12 w-big sm:h-16 bg-bottom object-cover " src="trippy2.png"></img>
          <a className="medium absolute w-full py-2.5 bottom-2.5 text-white text-center">Evan Lin</a>
        </div>

        {/* GIVE A THANK YOU TO EVERY SECTION LIKE A THANK YOU TO BRETT FOR EPIPHETS*/}
        {/* thank anshul and harrison in projects*/}
        {/* thank jake in bookshelf */}
        {/* thank jae and ryan junee in writing */}

              <div className = "flex justify-around pt-6 pb-8">
                <a className = "regular">Home [0]</a>
                <a className = "regular">Writing [1]</a>
                <a className = "regular">Bookshelf [2]</a>
                <a className = "regular">Epiphets [3]</a>
                <a className = "regular">Projects [4]</a>
              </div>

      </div>


      <div className = "Header">
         <a className = "medium text-black flex justify-center text-4xl text-center pb-2 pt-6 sm:text-6xl sm:pt-4 tracking-normal"> Take a Leap of Faith</a>
            <div className = "flex flex-row justify-center">
              <a className = "medium text-black font-regular text-lg sm:text-3xl pb-6 tracking-normal"> Pull the Lever. </a>
            </div>
      </div>


      <div className = "Portfolio">
        <div className = "flex flex-col items-center ">
          <img className = "flex h-52 justify-center z-10 sm:h-72" src="ok2.png"></img>
        </div>
      </div>


      <div className = "flex flex-col self-center pt-6 max-w-lg">

        <details class=" open:bg-amber-200 duration-300">
            <summary class="bg-inherit text-lg cursor-pointer">
              <a class="medium sm:text-2xl"> <pog className="pog">Design choice </pog>about this site </a>
              </summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>under construction.</p>
            </div>
        </details>

        <details class="pt-0.5 open:bg-amber-200 duration-300">
            <summary class="bg-inherit text-lg cursor-pointer">
              <a class="medium sm:text-2xl"> About me </a>
              </summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>Esoteric embedded system enthusiast. Seeking fundemental truths of reality. This part is also still under construction. </p>
            </div>
        </details>



          <div className = "Footer pt-20">
            <a className = "medium text-black text-xl sm:text-2xl tracking-normal">Find me on</a>
             <div className = "flex gap-x-8 pt-6">

              <div>
                <a className = "regular">YouTube</a>
                <img src="scribble1.png"></img>
              </div>


              <div>
                <a className = "regular">Twitter</a>
                <img src="scribble2.png"></img>
              </div>

              <div>
                <a className = "regular">LinkedIn</a>
                <img src="scribble3.png"></img>
              </div>

              <div>
                <a className = "regular">Instagram</a>
                <img src="scribble4.png"></img>
              </div>

              <div>
                <a className = "regular">Email</a>
                <img src="scribble5.png"></img>
              </div>

              </div> 
          </div>
  
      </div>
    </>
    )
} 
