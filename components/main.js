import Head from "next/head";
import useDarkMode from './useDarkMode'

export default function Main() {
  const [colorTheme, setTheme] = useDarkMode();
    return(
      <>
      <div className = "flex justify-between">
        <img className = "h-16 sm:h-20"src="vector.png"></img>

        <div className= "flex flex-row space-x-3 items-center sm:space-x-4">

        <div className = "">
          {colorTheme === "light" ? (
            <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
          </svg>
        ) : (
          <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
          </svg>
        )}
        </div>

          <div className = "dark:bg-purple-700 cursor-pointer rounded-full h-12 w-40 flex items-center justify-center bg-gray-100 filter drop-shadow-xl transform transition duration-400 hover:scale-110  sm:w-52 sm:h-14">
            <a className = "dark:text-white font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border-opacity-0 sm:text-lg">My Newsletter</a>
          </div>
        </div>

      </div>

      <div className = "header">
         <a className = "dark:text-white flex justify-center font-extrabold text-5xl text-center pb-2 pt-6 sm:text-6xl sm:pt-4"> Hey! I'm Evan.</a>
          <div className = "flex flex-row justify-center">
            <a className = "dark:text-white font-regular text-lg sm:text-3xl">Welcome to my website! </a>
            <img src="wave.png" className="wave h-7 sm:h-10"/>
          </div>
      </div>
        <div className = "portfolio">
          <div className = "flex flex-col items-center ">
            <div className = "circle fixed rounded-full h-20 w-20 flex items-center justify-center mr-16 bg-yellow-200 filter drop-shadow-lg sm:h-24 sm:w-24 sm:mr-20"></div>
            <img className = "flex h-52 justify-center z-10 sm:h-72" src="me.png"></img>
            <div className = "dark:bg-purple-700 z-10 cursor-pointer rounded-full py-4 w-72 flex items-center justify-center bg-gray-100 filter drop-shadow-xl border-opacity-0 transform transition duration-400 hover:scale-110 sm:w-96" onClick = {() => window.open('https://trusting-clutch-140.notion.site/6052530559bc4e1db8a48520d056da80?v=d7765ed8598843e1bd79d17d3187933c')}>
              <a className = "dark:text-white font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Portfolio</a>
            </div>
          </div>
        </div>

      <div className = "flex flex-col self-center pt-8 max-w-lg">
        <div className = "past">
          <a className = "dark:text-white font-bold text-2xl">Sh*t I’ve done </a>
          <div>
            <a className = "dark:text-white">Made and shutdown a <b>crypto analytics startup</b> with friends, built 
            <b> machine learning webapps</b>, spoke at <b>IBM Evoke</b> 2020, Full Stack 
            + UI/UX, and <b>intern</b> at Vocinity Inc.</a>
          </div>
        </div>
        <div className = "present pt-8">
         <a className = "dark:text-white font-bold text-2xl ">My Current Focus:</a>
            <div className = "dark:text-white">
              <li>Discovering purpose, passion and love through <b>spirituality</b></li>
              <li>Building a homebrew computer from <b>scratch</b></li>
              <li>Exploring the realm of <b>Brain-Computer Interfaces</b> (BCIs)</li>
            </div>
        </div>
        
      </div>
    </>
    )
} 