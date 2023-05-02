import { useState } from "react";
import ExpandedPlayerCard from "./expandedplayercard";
import PlayerCard from "./playercard";

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
        <div class="grid grid-cols-3 p-1 mt-4">
            <ExpandedPlayerCard sharedExpanded={expanded} data={expandedData} inverted={false} />
            <div class="grid grid-cols-2 w-full mx-auto col-start-2">
                <div class="flex flex-col -translate-x-16">
                <text class="text-3xl font-bold text-red-800 text-left">MAROON</text>

                    <PlayerCard
                        summonerName="PARAGON OF HONOR"
                        description={"Quinn Crothers, Paragonofhonor, is Maroon Team's starting mid lane player. A master of control mages, he excels at scaling late in games and setting the pace of teamfights."}
                        rank={"Diamond 2"}

                        onExpand={handleExpand}

                        championImages={['./champions/anivia.png', './champions/velkoz.png', './champions/ahri.png']}
                        laneImage="./lanes/mid.png"
                        rankImage="./ranks/diamond.png"
                        bannerGif="./gifs/AniviaBG.gif"

                        selected={selectedSummoner === 'PARAGON OF HONOR'}
                    />

                    <PlayerCard
                        summonerName="CARAMEL HEAVEN"
                        description={"Caleb Thomas, CARAMEL HEAVEN is Maroon Teams starting bot laner. The ranger class is his specialty, and he is known for his ability to kite and position in teamfights."}
                        rank={"Masters"}

                        onExpand={handleExpand}

                        championImages={['./champions/caitlyn.png', './champions/kaisa.png', './champions/jhin.png']}
                        laneImage="./lanes/bottom.png"
                        rankImage={"./ranks/master.png"}
                        bannerGif="./gifs/JhinBG.gif"

                        selected={selectedSummoner === 'CARAMEL HEAVEN'}
                    />


                    <PlayerCard
                        summonerName="YUBS"
                        description={"PUT YUBS NAME HERE, Yubs, is Maroon Team's starting Support player. He is known for his ability to play engage supports and set up his team for success."}
                        rank={"Masters"}

                        onExpand={handleExpand}

                        championImages={['./champions/rammus.png', './champions/karma.png', './champions/thresh.png']}
                        laneImage="./lanes/support.png"
                        rankImage={"./ranks/master.png"}
                        bannerGif="./gifs/ThreshBG.gif"

                        selected={selectedSummoner === 'YUBS'}
                    />

                    <PlayerCard
                        summonerName="DRAGCOCKS"
                        description={"Matt Wu, Dragcocks, is Maroon Team's starting top laner. He is known for his ability to play duelists and split push to victory."}
                        rank={"challenger"}

                        onExpand={handleExpand}

                        championImages={['./champions/leona.png', './champions/maokai.png', './champions/nautilus.png']}
                        laneImage="./lanes/top.png"
                        rankImage={"./ranks/challenger.png"}
                        bannerGif="./gifs/CamilleBG.gif"

                        selected={selectedSummoner === 'DRAGCOCKS'}
                    />

                    <PlayerCard
                        summonerName="IM ENTING"
                        description={"Chris PUT CHRIS' LAST NAME HERE , Im Enting, is Maroon Team's starting jungler. He is known for his ability to play carry junglers and snowball his team to victory."}
                        rank={"diamond"}

                        onExpand={handleExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/diamond.png"}
                        bannerGif="./gifs/JarvanBG.gif"

                        selected={selectedSummoner === 'IM ENTING'}
                    />

                </div>
               
                <div class="flex flex-col translate-x-16">
                    <text class="text-3xl font-bold text-red-800 text-right" >WHITE</text>
                    <PlayerCard
                        summonerName="NOBLE"
                        description={"TODO Make white team player cards"}
                        rank={"gold"}

                        onExpand={handleInvertedExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/gold.png"}
                        inverted={true}

                        selected={invertedSelectedSummoner === 'NOBLE'}
                    />

                    <PlayerCard
                        summonerName="CHIPP"
                        description={"TODO Make white team player cards"}
                        rank={"gold"}

                        onExpand={handleInvertedExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/gold.png"}
                        inverted={true}

                        selected={invertedSelectedSummoner === 'CHIPP'}
                    />
                    <PlayerCard
                        summonerName="JANE"
                        description={"TODO Make white team player cards"}
                        rank={"gold"}

                        onExpand={handleInvertedExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/gold.png"}
                        inverted={true}

                        selected={invertedSelectedSummoner === 'JANE'}
                    />
                    <PlayerCard
                        summonerName="GHOSTCIRCLE"
                        description={"TODO Make white team player cards"}
                        rank={"gold"}

                        onExpand={handleInvertedExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/gold.png"}
                        inverted={true}

                        selected={invertedSelectedSummoner === 'GHOSTCIRCLE'}
                    />
                    <PlayerCard
                        summonerName="ZANUF"
                        description={"TODO Make white team player cards"}
                        rank={"gold"}

                        onExpand={handleInvertedExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/gold.png"}
                        inverted={true}

                        selected={invertedSelectedSummoner === 'ZANUF'}
                    />
                </div>
            </div>
            <ExpandedPlayerCard sharedExpanded={expanded} data={expandedData} inverted={true} inveretedSharedExpanded={invertedExpanded} invertedData={invertedExpandedData}/>

        </div>
    );
}

export default PlayerCardSection;