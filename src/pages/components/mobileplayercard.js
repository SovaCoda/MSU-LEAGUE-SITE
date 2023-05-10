const MobilePlayerCard = ({data, inverted}) => {
    return(
        <div class={`flex flex-col p-1 m-1 shadow-lg h-28 ${
            inverted ? "bg-white" : "bg-red-900"
        }`}>
            <text class={`text-2xl font-bold ${
                inverted ? "text-red-900" : "text-white"
            }`}>{data.summonerName}</text>
        </div>
    );
}

export default MobilePlayerCard