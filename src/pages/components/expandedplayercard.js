import React, { useEffect, useState } from 'react';



const ExpandedPlayerCard = ({sharedExpanded, data, inverted, inveretedSharedExpanded, invertedData}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!sharedExpanded) {
          const timer = setTimeout(() => {
            setVisible(false);
          }, 500); 
          return () => clearTimeout(timer);
        } else {
          setVisible(true);
        }
      }, [sharedExpanded]);


    return (
        <div className={`sticky ${ inverted ? 'mx-auto' : 'left-28' } top-20 w-96 pt-0 pl-0 pr-0 pb-4 mx-0 bg-red-900 shadow-md rounded-lg opacity-100  ${
            sharedExpanded ? 'animate-fadeInRight' : 'animate-fadeOut'
        } ${
            visible ? 'block' : 'hidden'
            }`} style={{ height: "600px"}}>
            <div className="relative h-1/6 overflow-hidden rounded-t-lg ">
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.bannerGif})`}}
                ></div>
            </div>
            <div className="flex justify-center items-center -translate-y-11">
                <div className="flex-1 flex justify-center">
                    <img src={data.laneImage} className="w-24 scale-75 translate-x-0" />
                    <div className="bg-black rounded-full w-24 h-24 mr-8 ml-8 flex items-center justify-center shadow-2xl">
                        <p className="text-white font-bold text-center">PLACE<br></br>HOLDER</p>
                    </div>
                    <img src={data.rankImage} className="w-20" />
                </div>
            </div>
            <div className="flex ml-4">
                <text className="text-2xl text-white font-bold text-left">{data.summonerName}</text>
            </div>
            <div className="flex ml-4 mt-4">
                <text className="text-md text-white text-left">{data.description}</text>
            </div>
        </div>
    );
}

export default ExpandedPlayerCard;