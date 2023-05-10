import React, { useEffect, useState } from 'react';

const ExpandedPlayerCard = ({sharedExpanded, data}) => {
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
        <div className={`sticky top-20 w-64 lg:w-96 2xl:h-full h-1/2 pb-4 justify-self-end bg-red-900 shadow-md rounded-lg opacity-100 ${
            sharedExpanded ? 'animate-fadeInRight' : 'animate-fadeOut'
        } ${
            visible ? 'block' : 'hidden'
            }`}>
            <div className="relative h-1/6 overflow-hidden rounded-t-lg ">
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.bannerGif})`}}
                ></div>
            </div>
            <div className="flex justify-center items-center -translate-y-11">
                <div className="flex-1 flex justify-center">
                    <img src={"./lanes/" + data.role + ".png"} className="w-24 scale-75 translate-x-0" />
                    <div className="bg-black rounded-full w-24 h-24 mr-8 ml-8 flex items-center justify-center shadow-2xl">
                        <p className="text-white font-bold text-center">PLACE<br></br>HOLDER</p>
                    </div>
                    <img src={"./ranks/" + data.rank + ".png"} className="w-20" />
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