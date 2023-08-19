import React, {useState} from 'react';
const PlayerCard = ({ inverted, onExpand, selected, data}) => {
  
  const handleExpand = (data) => {
    onExpand(data);
  }

  return (
    <div className={`container flex flex-nowrap 2xl:w-3/4 xl:w-2/4 md:w-2/4 sm: w-2/4 items-center mx-auto mt-10 hover:scale-100 transition-all duration-300 cursor-pointer ${
      selected ? '-translate-x-4' : ''
    }`} onClick={() => handleExpand(data)}>
      <div className={`grid p-1.5 grid-rows-2 gap-y-0 ${
          inverted ? 'bg-white' : 'bg-red-900'  
        } bg-opacity-100 rounded-md shadow-2xl w-full`}style={{ gridTemplateRows: "auto minmax(0, 1fr)" }}>
        <div className="container flex justify-between ml-1 h-8">
          <text className={`xl:text-xl md:text-md font-bold truncate ${
            inverted ? 'text-red-900' : 'text-white'
          } text-left`}>{data.summonerName} </text>

        </div>
        <div className="container flex justify-between">
          <img src={"./lanes/" + data.role + ".png"} alt="" className="w-8 mb-1"/>
          <div className="flex space-x-2 mr-1">
            {data.champions.map((champion, index) => {
              return (
                <img
                  key={index}
                  src={"./leaguecontent/champions/" + champion + ".png"} 
                  alt="" 
                  className="w-8 mb-1 justify-start"/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;