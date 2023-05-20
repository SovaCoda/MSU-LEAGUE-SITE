const Game = ({data}) => {
    return(
        <div className={`flex flex-row p-2 mx-4 animate-fadeInRight delay-100   ${
            data.win ? "bg-red-900" : "bg-green-500"
        }`}> 
            <div className="flex flex-col justify-start pr-4 ">
                <text className="text-left font-bold text-md text-white">{data.dated}</text>
                <text className="text-left text-sm text-white">{data.duration}</text>
                <text className="text-left text-sm text-white">{data.queueType}</text>
            </div>
            <img src={"/leaguecontent/champions/" + data.champion + ".png"} className="w-16 h-16 justify-start"></img>
            <div className="flex flex-col justify-start px-2 ">
                <img src={"/leaguecontent/spells/" + data.summonerSpell0 + ".png"} className="w-8 h-8 justify-start rounded-lg"></img>
                <img src={"/leaguecontent/spells/" + data.summonerSpell1 + ".png"} className="w-8 h-8 justify-start rounded-lg"></img>
            </div>
            <div className="flex flex-col justify-start px-0 ">
                <img src={"/leaguecontent/runes/" + data.keystone + ".png"} className="w-8 h-8 justify-start "></img>
                <img src={"/leaguecontent/runes/" + data.secondary + ".png"} className="w-8 h-8 justify-start"></img>
            </div>
            <div className="flex flex-col justify-start px-2 ">
                <text className="text-center my-auto font-bold text-2xl text-white">{data.kills}/{data.deaths}/{data.assists}</text>
                <text className="text-center my-auto text-xl text-white">{data.creepScore} CS</text>
            </div>
        </div>
    );
}

export default Game;