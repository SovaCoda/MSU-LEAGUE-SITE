import NavBar from "../../components/navbar";
import Matches from "../../components/matches";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/players?name=ParagonOfHonor");
    const player = await res.json();
    console.log("Player page found, Player Object: " + player);
    return { props: { player } };
}

export default function Paragonofhonor({player}) {
    return (
        <>
        <div class="fixed top-0 left-0 w-screen h-screen z-[-1] bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/background2.jpg')" }}></div>
        <div class="flex  sm:h-96 h-44 bg-cover bg-center bg-red-800 text-white">
            <text className="text-5xl mt-auto font-bold m-4">{player.summoner_name}</text>
            <div class="flex items-center mt-auto text-center  text-4xl  font-bold  justify-center w-36 h-56 bg-cover bg-center bg-black">
                Place<br></br>Holder
             </div>
             <div className="justify-right items-center my-auto mr-44 ml-auto flex flex-col">
                cool design goes here
            </div>
        </div>
        <NavBar/>
        <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-12 sm:divide-x-2 ">
            <div className="flex flex-col m-4 animate-fadeIn">
                <text className="text-5xl text-red-800 sm:justify-start justify-center text-left font-bold"> BIOGRAPHY </text>
                <text className="text-2xl text-red-800 sm:justify-start justify-center text-left mt-2 "> Quinn Crothers A.K.A ParagonOfHonor is a finance major at MSU from Madison, MS.
                 first started playing League back in 2013 and has since developed a love for the game that most would call 'close to an addiction'. Originally playing the game just
                for fun, Quinn jumped at the opportunity to play for MSU's league team being one of the first high ranked mid laners at diamond II. </text>
                <text className="text-2xl text-red-800 sm:justify-start justify-center text-left mt-2">The League of Legends program here at MSU wouldn't be what it is today if not for his passion for the game and a genuine wish for the team to always be improving. </text>
            </div>
            <div className="flex flex-col gap-2 animate-fadeInRight delay-100 ">
                <text className="text-5xl text-red-800 justify-center  mx-auto  font-bold"> Latest Games </text>
                <Matches
                    puuid={player.summoner_puuid}
                />

            </div>
        </div>
        </>
    );
}