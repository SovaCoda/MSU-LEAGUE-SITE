import PlayerCardSection from "./components/playercardsection"
import MobilePlayerCardSection from "./components/mobileplayercardsection"

export default function Home() {
  return (
    <>
    <div class="fixed top-0 left-0 w-screen h-screen z-[-1] bg-cover bg-center" style={{ backgroundImage: "url('/images/background2.jpg')" }}></div>
    <div className="relative min-h-screen w-full">
      <div class="container flex items-center mt-4">
        <div class="flex flex-col items-center">
          <img src="./images/Logo.png" alt="logo" class="w-1/2 hover:scale-125 transition-all duration-300 cursor-pointer hidden md:block" />
        </div>
      </div>
      <div class="container flex items-center justify-center mt-4 mx-auto">
        <text class="text-7xl font-bold text-red-800 text-center" >MSU<br></br>League of Legends </text>
      </div>
      <div class="container flex items-center justify-center mt-48 mx-auto">
        <text class="sm:text-2xl text-lg font-bold text-red-800 text-center" >MEET OUR<br></br></text>
      </div>
      <div class="container flex items-center justify-center mt-0 mx-auto">
        <text class="sm:text-7xl text-5xl font-bold text-red-800 text-center" >SUMMONERS</text>
      </div>

      
      <PlayerCardSection/>
      <MobilePlayerCardSection/>


      <div class="flex items-center justify-center mt-48">
        <img src="./images/youtubelogo.png" alt="logo" class="w-16" />
        <text class="sm:text-7xl text-4xl font-bold text-red-800 text-center ml-4 mr-4" >WATCH US LIVE</text>
        <img src="./images/twitchlogo.png" alt="logo" class="w-16" />
      </div>

      <div class="md:flex md:flex-row-reverse flex-col justify-center mt-10 animate-fadeIn">
        <div class="flex flex-col items-left mt-12 mb-4">
          <text class="md:text-4xl text-2xl font-bold text-red-800 md:text-top md:text-left text-top ml-4 mr-4" >Official MSU ESPORTS</text>
          <text class="text-xl text-red-800 text-top ml-4 mr-4 md:max-w-lg max-w-none" >MSU Esports will sometimes stream our tournament matches with commentators</text>
        </div>
        <div>
          <iframe src="https://player.twitch.tv/?channel=msu_esports&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" class="w-full h-64 px-4 md:w-[28rem] md:h-72 lg:w-[32rem] lg:h-80 xl:w-[40rem] xl:h-96"></iframe>
        </div>
      </div>

      <div class="md:flex md:flex-row justify-center mt-6 animate-fadeIn">
        <div class="flex flex-col items-start mt-12 mb-4">
          <text class="md:text-4xl text-2xl font-bold text-red-800 text-top ml-4 mr-4" >Caramel Heaven's Stream</text>
          <text class="text-xl text-red-800 text-top ml-4 mr-4 md:max-w-lg max-w-none" >Our adc, Caramel Heaven, streams some of the more minor games we play.</text>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bvrPENBoTmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class ="px-4 w-full h-64 md:w-[28rem] md:h-72 lg:w-[32rem] lg:h-80 xl:w-[40rem] xl:h-96"></iframe>
      </div>

      <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <text class="text-3xl text-white font-bold">this is some long stuff</text>
    </div>
    </>
  )
}
     
