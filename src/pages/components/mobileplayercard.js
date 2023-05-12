const MobilePlayerCard = ({data, inverted}) => {
    return(
        <div class={`flex flex-col p-1 m-1 shadow-lg ${
            inverted ? "bg-white" : "bg-red-900"
        }`}>
            <div class="flex justify-end flex-row-reverse">
                <text class={`text-2xl font-bold mx-1 ${
                    inverted ? "text-red-900" : "text-white"
                }`}>{data.summonerName}</text>
                <img src={"./lanes/" + data.role + ".png"} alt="" class="w-8 mb-1"/>
            </div>
            <div class="flex h-full mx-2 mb-2">
                <div class="flex flex-col bg-black h-24 w-16">
                    <text class="text-white font-bold text-center text-sm p-1">PLACE<br></br>HOLDER</text>
                </div>
                <text class={`p-1 ${
                        inverted ? "text-red-900" : "text-white"
                    }`}>{data.description}</text>
            </div> 
        </div>
    );
}

export default MobilePlayerCard