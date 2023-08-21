import axios from "axios";
import { PrismaClient } from '@prisma/client';
const RIOT_API_KEY = process.env.RIOT_API_KEY;
const prisma = new PrismaClient();

function cullToEssential(match, puuid) {
  let mainCharacter = match.info.participants.find(p => p.puuid === puuid);
  return {
      gameId: match.metadata.matchId,
      gameMode: match.info.gameMode,
      queueId: match.info.queueId,
      duration: match.info.gameDuration,
      gameEndTimestamp: match.info.gameEndTimestamp,
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

async function get10RiotMatchIds(puuid) {
  const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`;
  const matchIds = await axios.get(url, {
    headers: {
      "X-Riot-Token": process.env.RIOT_API_KEY
    }
  });
  return matchIds.data;
}

async function cullRepeatedMatchIds(match_ids) {
  var first_10_match_ids = await prisma.Matches.findMany({
    take: 10,
    orderBy: {
      gameEndTimestamp: 'desc'
    }
  });
  return match_ids.filter(id => !first_10_match_ids.some(g => g.matchId === id));
}

async function gatMatchDataFromId(match_id)
{
  try {
    const match = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${match_id}`, {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY
      }
    });
    return match.data;
  }
  catch (error) {
    console.error(error);
  }
  
}

async function processDBMatchIds(match_ids, puuid) {
  let matches = [];
  for (let id of match_ids) {
    try {
      const match = await gatMatchDataFromId(id);
      let curMatch = cullToEssential(match, puuid);
      matches.push(curMatch);
    }
    catch (error) {
      console.error(error);
    }
  }
  console.log("Matches: ")
  console.log(matches);
  return matches;
}

export default async function handler(req, res)
{
    try
    {
        const puuid = req.query.puuid;   
        const match_ids = await get10RiotMatchIds(puuid);
        const match_ids_to_process = await cullRepeatedMatchIds(match_ids);
        const matches = await processDBMatchIds(match_ids_to_process, puuid);
        res.status(200).json(matches); 
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' }); 
    }
}

