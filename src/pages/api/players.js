import { connectToDb, getDb } from ".//dbinfo";
import axios from "axios";

const RIOT_API_KEY = process.env.RIOT_API_KEY;

function debugLog(error) {
    console.error('Error making request:', error.message);
    if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
    } else if (error.request) {
        console.error('No response received:', error.request);
    }
}

function cullToEssential(match, player) {
    let mainCharacter = match.data.info.participants.find(p => p.summonerName === player.name);
    return {
        gameId: match.data.metadata.matchId,
        gameMode: match.data.info.gameMode,
        queueId: match.data.info.queueId,
        duration: match.data.info.gameDuration,
        gameEndTimestamp: match.data.info.gameEndTimestamp,
        win: mainCharacter ? mainCharacter.win : undefined,
        kills: mainCharacter ? mainCharacter.kills : undefined,
        deaths: mainCharacter ? mainCharacter.deaths : undefined,
        assists: mainCharacter ? mainCharacter.assists : undefined,
        cs: mainCharacter ? mainCharacter.totalMinionsKilled : undefined,
        summonerSpell1Id: mainCharacter ? mainCharacter.summoner1Id : undefined,
        summonerSpell2Id: mainCharacter ? mainCharacter.summoner2Id : undefined,
        championId: mainCharacter ? mainCharacter.championId : undefined,
        keystoneId: mainCharacter ? mainCharacter.perks.styles[0].selections[0].perk : undefined,
        secondaryRuneId: mainCharacter ? mainCharacter.perks.styles[1].style : undefined,
    }
}

export default async function handler(req, res) {
    try {
        const {name} = req.query;
        if (!getDb()) {
            await connectToDb();
        }
        const db = getDb();
        const collection = db.collection("players");
        let player = await collection.findOne({ name });
        
        if (!player) {
            console.log("Creating new player: " + name);
            try{
                const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
                    headers: {
                        "X-Riot-Token": RIOT_API_KEY
                    }
                })
                response.data.games = [];

                let newPlayer = response.data;
                await collection.insertOne(newPlayer);
                player = newPlayer;
                console.log("Created new player: " + name);
            }
            catch(error) {
                debugLog(error);
            }
        }
        console.log("Found player: " + player.name)
        if (player.games.length === 0) {
            console.log("Player has no match ids stored, fetching from riot api");
            try {
                console.log("Fetching match ids for puuid: " + player.puuid)
                const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${player.puuid}/ids?count=10`, {
                headers: {
                    "X-Riot-Token": RIOT_API_KEY
                }});
                for (let id of response.data) {
                    try {
                        console.log("Fetching match data for match id: " + id)
                        const match = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}`, {
                            headers: {
                                "X-Riot-Token": RIOT_API_KEY
                            }});
                        
                        let curMatch = cullToEssential(match, player);
                        
                        player.games.push(curMatch);
                        console.log(curMatch);
                    }
                    catch(error) {
                        debugLog(error);
                    }
                }
                await collection.updateOne({ name: player.name }, { $set: { games: player.games } });
            }
            catch(error) {
                debugLog(error);
            }
        }
        else {
            console.log("Player has match ids stored, updating");
            try {
                console.log("Fetching match ids for puuid: " + player.puuid)
                const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${player.puuid}/ids?count=10`, {
                headers: {
                    "X-Riot-Token": RIOT_API_KEY
                }});
                let newMatchIds = response.data.filter(id => !player.games.some(g => g.gameId === id));
                if(newMatchIds.length === 0) {
                    console.log("No new match ids found, returning");
                    res.status(200).json(player);
                    return;
                }
                player.games = player.games.filter(g => !newMatchIds.some(id => id === g.gameId));

                for (let id of newMatchIds) {
                    try {
                        console.log("Fetching match data for match id: " + id)
                        const match = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}`, {
                            headers: {
                                "X-Riot-Token": RIOT_API_KEY
                            }});
                        
                        let curMatch = cullToEssential(match, player);
                        
                        player.games.push(curMatch);
                        // sort games by earliest to latest
                        player.games.sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp);
                        console.log(curMatch);
                    }
                    catch(error) {
                        debugLog(error);
                    }
                }
                await collection.updateOne({ name: player.name }, { $set: { games: player.games } });
            } catch (error) {
                debugLog(error);
            }
        }    
        
        res.status(200).json(player);
    } catch (error) {
        debugLog(error);
        res.status(500).json({ message: error.message });
    }
}