import MobilePlayerCard from "./mobileplayercard"
import playerInfo from "../playerinfo";

const MobilePlayerCardSection = ({}) => 
{
    return(
        <div class="flex-col sm:hidden">
            <MobilePlayerCard
                data={playerInfo.maroon.top}
            />

            <MobilePlayerCard
                data={playerInfo.maroon.jungle}
            />

            <MobilePlayerCard
                data={playerInfo.maroon.mid}
            />
            
            <MobilePlayerCard
                data={playerInfo.maroon.bottom}
            />
            <MobilePlayerCard
                data={playerInfo.maroon.support}
            />

            <MobilePlayerCard
                data={playerInfo.white.top}
                inverted={true}
            />

            <MobilePlayerCard
                data={playerInfo.white.jungle}
                inverted={true}
            />

            <MobilePlayerCard
                data={playerInfo.white.mid}
                inverted={true}
            />

            <MobilePlayerCard
                data={playerInfo.white.bottom}
                inverted={true}
            />

            <MobilePlayerCard
                data={playerInfo.white.support}
                inverted={true}
            />
            
        </div>
    );
}

export default MobilePlayerCardSection