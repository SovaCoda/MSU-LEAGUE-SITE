import { useState } from "react";
import ExpandedPlayerCard from "./expandedplayercard";
import InvertedExpandedPlayerCard from "./invertedexpandedplayercard";
import PlayerCard from "./playercard";
import playerInfo from "../playerinfo";

const PlayerCardSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [expandedData, setExpandedData] = useState([]);
    const [selectedSummoner, setSelectedSummoner] = useState('');

    const [invertedExpanded, setInvertedExpanded] = useState(false);
    const [invertedExpandedData, setInvertedExpandedData] = useState([]);
    const [invertedSelectedSummoner, setInvertedSelectedSummoner] = useState('');

    const handleExpand = (data) => {
        setExpanded(!expanded);
        setSelectedSummoner(data.summonerName);
        if (data.summonerName !== expandedData.summonerName && expanded) {
            const timer = setTimeout(() => {
                    setExpandedData(data);
                    setExpanded(true);
            }, 500);
        }
        else {
            setExpandedData(data);
            setSelectedSummoner('');
            if(!expanded){
                setSelectedSummoner(data.summonerName);
            }
        }
    };

    const handleInvertedExpand = (data) => {
        setInvertedExpanded(!invertedExpanded);
        setInvertedSelectedSummoner(data.summonerName);
        if (data.summonerName !== invertedExpandedData.summonerName && invertedExpanded) {
            const timer = setTimeout(() => {
                    setInvertedExpandedData(data);
                    setInvertedExpanded(true);
            }, 500);
        }
        else {
            setInvertedExpandedData(data);
            setInvertedSelectedSummoner('');
            if(!invertedExpanded){
                setInvertedSelectedSummoner(data.summonerName);
            }
        }
    };

    return (
        <div class="sm:grid grid-cols-3 mt-24 direction-rtr hidden">
            <ExpandedPlayerCard sharedExpanded={expanded} data={expandedData}/>
            <div class="grid 2xl:grid-cols-2 xl:grid-cols-1 w-full mx-auto col-span-1 col-start-2 ">
                <div class="flex flex-col">
                    <text class="text-3xl font-bold text-red-800 text-center">MAROON</text>
                    <PlayerCard
                        data={playerInfo.maroon.top}
                        onExpand={handleExpand}
                        selected={selectedSummoner === playerInfo.maroon.top.summonerName}
                    />
                    
                    
                    <PlayerCard
                        data={playerInfo.maroon.jungle}
                        onExpand={handleExpand}
                        selected={selectedSummoner === playerInfo.maroon.jungle.summonerName}
                    />

                    <PlayerCard
                        data={playerInfo.maroon.mid}
                        onExpand={handleExpand}
                        selected={selectedSummoner === playerInfo.maroon.mid.summonerName}
                    />

                    <PlayerCard
                        data={playerInfo.maroon.bottom}
                        onExpand={handleExpand}
                        selected={selectedSummoner === playerInfo.maroon.bottom.summonerName}
                    />

                    <PlayerCard
                        data={playerInfo.maroon.support}
                        onExpand={handleExpand}
                        selected={selectedSummoner === playerInfo.maroon.support.summonerName}
                    />

                </div>
               
                <div class="flex flex-col">
                    <text class="text-3xl font-bold mt-8 text-red-800 text-center" >WHITE</text>
                    <PlayerCard
                        data={playerInfo.white.top}
                        onExpand={handleInvertedExpand}
                        inverted={true}
                        selected={invertedSelectedSummoner === playerInfo.white.top.summonerName}
                    />

                    <PlayerCard
                        data={playerInfo.white.jungle}
                        onExpand={handleInvertedExpand}
                        inverted={true}
                        selected={invertedSelectedSummoner === playerInfo.white.jungle.summonerName}
                    />
                    <PlayerCard
                        data={playerInfo.white.mid}
                        onExpand={handleInvertedExpand}
                        inverted={true}
                        selected={invertedSelectedSummoner === playerInfo.white.mid.summonerName}
                    />
                    <PlayerCard
                        data={playerInfo.white.bottom}
                        onExpand={handleInvertedExpand}
                        inverted={true}
                        selected={invertedSelectedSummoner === playerInfo.white.bottom.summonerName}
                    />
                    <PlayerCard
                        data={playerInfo.white.support}
                        onExpand={handleInvertedExpand}
                        inverted={true}
                        selected={invertedSelectedSummoner === playerInfo.white.support.summonerName}
                    />
                </div>
            </div>
            <InvertedExpandedPlayerCard sharedExpanded={invertedExpanded} data={invertedExpandedData}/>
        </div>
    );
}

export default PlayerCardSection;