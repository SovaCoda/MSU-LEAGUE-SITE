import React, {useState} from 'react';
const PlayerCard = ({ summonerName, championImages, laneImage, inverted, onExpand, rankImage, description, bannerGif, selected}) => {

  const data = {
    summonerName: summonerName,
    championImages: championImages,
    laneImage: laneImage,
    rankImage: rankImage,
    description: description,
    bannerGif: bannerGif
  }
  
  const handleExpand = (data) => {
    onExpand(data);
  }

  return (
    <div class={`container flex flex-nowrap 2xl:w-3/4 xl:w-2/4 md:w-2/4 sm: w-2/4 items-center mx-auto mt-10 hover:scale-100 transition-all duration-300 cursor-pointer ${
      selected ? '-translate-x-4' : ''
    }`} onClick={() => handleExpand(data)}>
      <div className={`grid grid-rows-2 gap-y-0 ${
          inverted ? 'bg-white' : 'bg-red-900'  
        } bg-opacity-100 rounded-md shadow-2xl w-full`}style={{ gridTemplateRows: "auto minmax(0, 1fr)" }}>
        <div class="container flex justify-between ml-1 h-8">
          <text class={`text-2xl font-bold truncate ${
            inverted ? 'text-red-900' : 'text-white'
          } text-left`} style={{maxWidth: "100%", width: "auto", fontSize: "1.5rem", flexShrink: "1"}}>{summonerName} </text>

        </div>
        <div class="container flex justify-between">
          <img src={laneImage} alt="" class="w-8 mb-1"/>
          <div class="flex space-x-2 mr-1">
            {championImages.map((championImage, index) => {
              return (
                <img
                  key={index}
                  src={championImage} 
                  alt="" 
                  class="w-8 mb-1 justify-start"/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default PlayerCard;