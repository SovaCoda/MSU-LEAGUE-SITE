import { useState } from "react";
import ExpandedPlayerCard from "./expandedplayercard";
import LaneSelector from "./laneselector";


const LaneSelectorSection = () => {
    const [expanded, setExpanded] = useState(true);
    const [expandedData, setExpandedData] = useState({'summonerName' : 'DRAGCOCKS', 'championImages' : ['./champions/leona.png', './champions/maokai.png', './champions/nautilus.png'], 'laneImage' : './lanes/top.png', 'rankImage' : './ranks/challenger.png', 'description' : "Matt Wu, Dragcocks, is Maroon Team's starting top laner. He is known for his ability to play duelists and split push to victory.", 'bannerGif' : './gifs/CamilleBG.gif'  }  );


    const handleExpand = (data) => {
        setExpanded(expanded);
        setExpandedData(data);
    };

    return (
        <div class="mt-48">
            <div class="flex items-center justify-center mt-4 mx-auto">
                <text class="text-2xl font-bold text-red-800 text-center" >Meet our<br></br></text>
            </div>
            <div class="flex items-center justify-center mx-auto">
                <text class="text-7xl font-bold text-red-800 text-center" >SUMMONERS</text>
            </div>
            <div class="grid grid-cols-6 mt-24">
                <div class = "container w-full h-96 border-b-4 border-red-800 col-span-1"></div>
                <div class = "flex w-full h-96 border-b-4 border-red-800 col-span-2 justify-end">
                    <LaneSelector 
                        summonerName="DRAGCOCKS"
                        description={"Matt Wu, Dragcocks, is Maroon Team's starting top laner. He is known for his ability to play duelists and split push to victory."}
                        rank={"challenger"}

                        onExpand={handleExpand}

                        championImages={['./champions/leona.png', './champions/maokai.png', './champions/nautilus.png']}
                        laneImage="./lanes/top.png"
                        rankImage={"./ranks/challenger.png"}
                        bannerGif="./gifs/CamilleBG.gif"
                    />
                    <LaneSelector 
                        summonerName="IM ENTING"
                        description={"Chris PUT CHRIS' LAST NAME HERE , Im Enting, is Maroon Team's starting jungler. He is known for his ability to play carry junglers and snowball his team to victory."}
                        rank={"diamond"}

                        onExpand={handleExpand}

                        championImages={['./champions/lee sin.png', './champions/ekko.png', './champions/zed.png']}
                        laneImage="./lanes/jungle.png"
                        rankImage={"./ranks/diamond.png"}
                        bannerGif="./gifs/JarvanBG.gif"
                    />
                    <LaneSelector 
                        summonerName="PARAGON OF HONOR"
                        description={"Quinn Crothers, Paragonofhonor, is Maroon Team's starting mid lane player. A master of control mages, he excels at scaling late in games and setting the pace of teamfights."}
                        rank={"Diamond 2"}

                        onExpand={handleExpand}

                        championImages={['./champions/anivia.png', './champions/velkoz.png', './champions/ahri.png']}
                        laneImage="./lanes/mid.png"
                        rankImage="./ranks/diamond.png"
                        bannerGif="./gifs/AniviaBG.gif"
                    />
                    <LaneSelector 
                        summonerName="YUBS"
                        description={"PUT YUBS NAME HERE, Yubs, is Maroon Team's starting Support player. He is known for his ability to play engage supports and set up his team for success."}
                        rank={"Masters"}

                        onExpand={handleExpand}

                        championImages={['./champions/rammus.png', './champions/karma.png', './champions/thresh.png']}
                        laneImage="./lanes/support.png"
                        rankImage={"./ranks/master.png"}
                        bannerGif="./gifs/ThreshBG.gif"
                    />
                    <LaneSelector 
                        summonerName="CARAMEL HEAVEN"
                        description={"Caleb Thomas, CARAMEL HEAVEN is Maroon Teams starting bot laner. The ranger class is his specialty, and he is known for his ability to kite and position in teamfights."}
                        rank={"Masters"}
    
                        onExpand={handleExpand}
    
                        championImages={['./champions/caitlyn.png', './champions/kaisa.png', './champions/jhin.png']}
                        laneImage="./lanes/bottom.png"
                        rankImage={"./ranks/master.png"}
                        bannerGif="./gifs/JhinBG.gif"
                    />
                </div>
                <div class = "flex w-full h-96 border-b-4 border-red-800 col-span-1"></div>
                <div class = "flex w-full justify-between col-span-2 -translate-x-8">
                    <ExpandedPlayerCard sharedExpanded={expanded} data={expandedData} />
                </div>
            </div>
        </div>
    );
}

export default LaneSelectorSection