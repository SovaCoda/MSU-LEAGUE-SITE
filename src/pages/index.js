import PlayerCardSection from "./components/playercardsection"
import LaneSelectorSection from "./components/laneselectorsection"

export default function Home() {
  return (
    <>
    <div class="fixed top-0 left-0 w-screen h-screen z-[-1] bg-cover bg-center" style={{ backgroundImage: "url('/images/background2.jpg')" }}></div>
    <div className="relative min-h-screen w-full backdrop-blur-sm">
      <div class="container flex items-center mt-4">
        <div class="flex flex-col items-center">
          <img src="./images/Logo.png" alt="logo" class="w-1/2 hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
      <div class="container flex items-center justify-center mt-4 mx-auto">
        <text class="text-7xl font-bold text-red-800 text-center" >MSU<br></br>League of Legends </text>
      </div>
      
      <PlayerCardSection/>
      
      <div class="flex items-center justify-center mt-48">
        <img src="./images/youtubelogo.png" alt="logo" class="w-16" />
        <text class="text-7xl font-bold text-red-800 text-center ml-4 mr-4" >Watch us LIVE</text>
        <img src="./images/twitchlogo.png" alt="logo" class="w-16" />
      </div>

      <div class="flex justify-center mt-4 animate-fadeIn">
        <iframe src="https://player.twitch.tv/?channel=msu_esports&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        <div class="flex flex-col items-left mt-8">
          <text class="text-4xl font-bold text-red-800 text-top ml-4 mr-4" >Official MSU ESPORTS</text>
          <text class="text-xl font-bold text-red-800 text-top ml-4 mr-4" >MSU Esports will sometimes stream <br></br> our tournament matches with commentators <br></br><br></br><br></br> (if we're lucky)</text>
        </div>
      </div>

      <div class="flex justify-center mt-4 animate-fadeIn">
        <div class="flex flex-col items-left mt-8 ">
          <text class="text-4xl font-bold text-red-800 text-top ml-4 mr-4" >Caramel Heaven's Stream</text>
          <text class="text-xl font-bold text-red-800 text-top ml-4 mr-4" >Our adc, Caramel Heaven, streams some of<br></br>   the more minor games we play.</text>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bvrPENBoTmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <text class="text-3xl text-white font-bold">this is some long stuff to make the site scrollable remove me when done</text>
    </div>
    </>
  )
}
     
