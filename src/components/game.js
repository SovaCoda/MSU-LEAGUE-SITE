import champion from "../../public/leaguecontent/constants/champion.json";
import runes from "../../public/leaguecontent/constants/runesReforged.json";
import spells from "../../public/leaguecontent/constants/summonerSpells.json";
import queues from "../../public/leaguecontent/constants/queues.json";

function findRuneNameById(id) {
    let foundName = null;
    runes.find(item =>
        item.slots.find(slot =>
            slot.runes.find(rune => {
                if (rune.id === id) {
                    foundName = rune.name;
                    console.log(`foundName: ${foundName}`);
                }
            })
        )
    );
    if(foundName !== null) {
        let trimmedName = foundName.replace(/\s/g, '');
        return trimmedName
    }
}

function findStyleById(id) {
    let foundName = null;
    runes.find(item => {item.id === id
        if (item.id === id) {
            foundName = item.key;
        }
    });    
    
    if(foundName !== null) {
        let trimmedName = foundName.replace(/\s/g, '');
        return trimmedName
    }
}

function findSpellNameById(id) {
    let foundName = null;
    spells.find(item => {item.id === id
        if (item.id === id) {
            foundName = item.name;
        }
    });
    if(foundName !== null) {
        let trimmedName = foundName.replace(/\s/g, '');
        return trimmedName;
    }
}

function findQueueNameById(id) {
    let foundName = null;
    queues.find(item => {item.queueId === id
        if (item.queueId === id) {
            foundName = item.description;
        }
    });
    return foundName;
}

function convertSecondsToMinutesSeconds(seconds) {
    let time = Number(BigInt(seconds));
    let minutes = Math.floor(time / 60);
    let remainingSeconds = time % 60;
    return minutes + ":" + remainingSeconds;
}

function calculateDaysSincePlayed(date) {
    let now = Math.floor(Date.now()/1000);
    let timestamp = new Date(Math.floor(date/1000));
    let difference = now - timestamp;
    let days = Math.floor(difference / 86400);
    return days;
}

const Game = ({data}) => {
    if(data.keystoneId !== undefined) {
        data.champion = Object.keys(champion.data).find(key => champion.data[key].key == data.championId);
        data.keystone = findRuneNameById(data.keystoneId);
        data.secondary = findStyleById(data.secondaryRuneId);
        data.summonerSpell0 = findSpellNameById(data.summonerSpell1Id);
        data.summonerSpell1 = findSpellNameById(data.summonerSpell2Id);
        data.queueType = findQueueNameById(data.queueId);
        data.durationMS = convertSecondsToMinutesSeconds(data.duration);
        data.dated = calculateDaysSincePlayed(data.gameEndTimestamp) + " days ago";
    }
    return(
        <div className={`flex flex-row p-2 mx-4 animate-fadeInRight delay-100   ${
            data.win ? "bg-red-900" : "bg-red-700"
        }`}> 
            <div className="flex flex-col justify-start pr-4 w-28">
                <text className="text-left font-bold text-md text-white">{data.dated}</text>
                <text className="text-left text-sm text-white">{data.durationMS}</text>
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
                <text className="text-left my-auto text-xl text-white">{data.cs} CS</text>
            </div>
            <div className="flex flex-col justify-end px-2 ml-auto">
                <text className="text-right my-auto text-xl text-white font-bold">{
                    data.win ? "Victory" : "Defeat"
                }</text>
            </div>
        </div>
    );
}

export default Game;