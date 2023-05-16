import React, {useState} from 'react';
const LaneSelector = ({ summonerName, championImages, laneImage, inverted, onExpand, rankImage, description, bannerGif}) => {

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
    };

    return (
        <div class="flex flex-col ml-8" onClick={() => handleExpand(data)}>
            <img src={laneImage} alt="" class="w-12 hover:scale-125 tranistion-all duration-100 cursor-pointer mt-auto"/>
            <text class="text-6xl text-center text-red-900 mb-2">|</text>
        </div>
        
    );

}
export default LaneSelector;