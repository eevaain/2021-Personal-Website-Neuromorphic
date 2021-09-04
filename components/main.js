
export default function Main() {
    return(
      <>
      <div className = "flex justify-between">
        <img className = "h-28 sm:20"src="vector.png"></img>
          <div className = "cursor-pointer rounded-full h-14 w-48 flex items-center justify-center bg-gray-100 filter drop-shadow-xl transform transition duration-400 hover:scale-110 mt-8 sm:w-64">
            <a className = "font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-xl">My Newsletter</a>
          </div>
      </div>

      <div className = "header">
         <a className = "flex justify-center font-extrabold text-5xl text-center pb-2 pt-2 sm:text-6xl "> Hey! I'm Evan.</a>
          <div className = "flex flex-row justify-center">
            <a className = "font-regular text-lg sm:text-3xl">Welcome to my website! </a>
            <img src="wave.png" className="h-7 sm:h10"/>
          </div>
      </div>
        <div className = "portfolio">
          <div className = "flex flex-col items-center ">
            <img className = "flex h-52  justify-center sm:h-72" src="me.png"></img>
            <div className = "cursor-pointer rounded-full py-4 w-72 flex items-center justify-center bg-gray-100 filter drop-shadow-xl transform transition duration-400 hover:scale-110 sm:w-96 ">
              <a className = "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Portfolio</a>
            </div>
          </div>
        </div>

      <div className = "flex flex-col self-center pt-8 max-w-lg">
        <div className = "past">
          <a className = "font-bold text-2xl">Sh*t I’ve done </a>
          <div>
            <a>Made and shutdown a <b>crypto analytics startup</b> with friends, built 
            <b> machine learning webapps</b>, spoke at <b>IBM Evoke</b> 2020, Full Stack 
            + UI/UX, and <b>intern</b> at Vocinity Inc.</a>
          </div>
        </div>
        <div className = "present pt-8">
         <a className = "font-bold text-2xl ">My Current Focus:</a>
            <div>
              <li>Discovering purpose, passion and love through <b>spirituality</b></li>
              <li>Building a homebrew computer from <b>scratch</b></li>
              <li>Exploring the realm of <b>Brain-Computer Interfaces</b> (BCIs)</li>
            </div>
        </div>
        
      </div>
    </>
    )
} 