
export default function Main() {
    return(
      <>
      <div className = "flex justify-between">
        <img className = "h-24 sm:h-28"src="vector.png"></img>
          <div className = "cursor-pointer rounded-full h-12 w-40 flex items-center justify-center bg-gray-100 filter drop-shadow-xl transform transition duration-400 hover:scale-110 mt-8 sm:w-52 sm:h-14">
            <a className = "font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-lg">My Newsletter</a>
          </div>
      </div>

      <div className = "header">
         <a className = "flex justify-center font-extrabold text-5xl text-center pb-2 pt-4 sm:text-6xl"> Hey! I'm Evan.</a>
          <div className = "flex flex-row justify-center">
            <a className = "font-regular text-lg sm:text-3xl">Welcome to my website! </a>
            <img src="wave.png" className="wave h-7 sm:h-10"/>
          </div>
      </div>
        <div className = "portfolio">
          <div className = "flex flex-col items-center ">
            <div className = "circle fixed rounded-full h-20 w-20 flex items-center justify-center mr-16 bg-yellow-200 filter drop-shadow-lg sm:h-24 sm:w-24 sm:mr-20"></div>
            <img className = "flex h-52 justify-center z-10 sm:h-72" src="me.png"></img>
            <div className = "cursor-pointer rounded-full py-4 w-72 flex items-center justify-center bg-gray-100 filter drop-shadow-xl transform transition duration-400 hover:scale-110 sm:w-96" onClick = {() => window.open('https://trusting-clutch-140.notion.site/6052530559bc4e1db8a48520d056da80?v=d7765ed8598843e1bd79d17d3187933c')}>
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