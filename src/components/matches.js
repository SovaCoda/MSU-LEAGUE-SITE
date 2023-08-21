import React from 'react';
import Game from './game';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Matches({ puuid }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Requesting from use effect matches for puuid: " + puuid)
    axios.get(`http://localhost:3000/api/matches/${puuid}`)
      .then(response => {
        setMatches(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching matches", error);
        setLoading(false);
      });
  }, [puuid]);

  if (loading) return <div>Loading matches...</div>;

  return (
    <div>
      {matches.map(match => (
        <Game key={match.matchId} data={match} />
      ))}
    </div>
  );
}

export default Matches;