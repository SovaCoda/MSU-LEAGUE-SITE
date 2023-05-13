const MobilePlayerCard = ({data, inverted}) => {
    return(
        <div class={`flex flex-col p-3 m-2 rounded shadow-lg ${
            inverted ? "bg-white" : "bg-red-900"
        }`}>
            <div class="flex justify-start">
                <img src={"./lanes/" + data.role + ".png"} alt="" class="w-8 mb-1 mr-1"/>
                <text class={`text-2xl font-bold mx-1 ${
                    inverted ? "text-red-900" : "text-white"
                }`}>{data.summonerName}</text>
            </div>
            <div class="flex h-full mx-2 mb-2 justify-around">
                <div class="flex flex-col bg-black h-24 w-16 rounded">
                    <text class="text-white font-bold text-center text-sm p-1">PLACE<br></br>HOLDER</text>
                </div>
                <img src={"./ranks/" + data.rank + ".png"} className="w-20" />
                <div class="flex space-x-2 mr-1 self-end">
                {data.champions.map((champion, index) => {
                return (
                    <img
                    key={index}
                    src={"./champions/" + champion + ".png"} 
                    alt="" 
                    class="w-10 h-10 mb-1 justify-start"/>
                )
                })}
                </div>
                <div className={`self-end ${
                    inverted ? "text-red-900" : "text-white"
                }`}>Expand</div>
            </div> 
        </div>
    );
}

export default MobilePlayerCard