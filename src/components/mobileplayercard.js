const MobilePlayerCard = ({data, inverted}) => {
    return(
        <a href={data.summonerName !== undefined ? "players/" + data.summonerName.replace(/\s/g, "").toLowerCase() : ""} className={`flex flex-col p-3 m-2 mx-4 rounded shadow-lg ${
            inverted ? "bg-white" : "bg-red-900"
        }`}>
            <div className="flex justify-start">
                <img src={"./lanes/" + data.role + ".png"} alt="" className="w-8 mb-1 mr-1"/>
                <text className={`text-2xl font-bold mx-1" ${
                    inverted ? "text-red-900" : "text-white"
                }`}>{data.summonerName}</text>
            </div>
            <div className="flex h-full mx-2 mb-2 ml-4 justify-between">
                <div className="flex flex-col bg-black h-24 w-16 rounded">
                    <text className="text-white font-bold text-center text-sm p-1">PLACE<br></br>HOLDER</text>
                </div>
                <img src={"./leaguecontent/ranks/" + data.rank + ".png"} className="w-16 self-end" />
                <div className="flex space-x-2 mr-1 self-end">
                {data.champions.map((champion, index) => {
                return (
                    <img
                    key={index}
                    src={"./leaguecontent/champions/" + champion + ".png"} 
                    alt="" 
                    className="w-8 h-8 mb-1 justify-start"/>
                )
                })}
                </div>
            </div> 
        </a>
    );
}

export default MobilePlayerCard