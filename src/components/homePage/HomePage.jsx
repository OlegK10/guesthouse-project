import React, {useState, useEffect} from 'react';
import  './style.css'
import bg from './bg_1.png';
import TopMenu from '../menu/TopMenu';
import arrow from './arrow.png'
import HomePageAboutUs from './homePageAboutUs/HomePage_AboutUs';
import HomePageFacilities from './homePageFacilities/HomePageFacilities';
import HomePageTopRooms from './homePageTopRooms/HomePageTopRooms';
import HomePageTourism from './homaPageTourism/HomePageTourism';
import EndCont from '../endCont/EndCont';

const HomePage = () => {


    useEffect(() => {
        const element = document.querySelector(".bg_fp")
        element.style.backgroundImage = 'url('+bg+')';  
        element.style.backgroundRepeat= 'no-repeat';  
        element.style.backgroundSize= 'cover';  
        element.style.backgroundPosition= 'center';  
    }, []);


    return [
        <TopMenu />,
            <div className="main">
                <div className="bg_fp">
                    {/* <img src={bg} alt="" className="bg_img" /> */}
                </div>

                <div className="hp_title_main">
                        <div className="hp_titm_cont">
                            <div className="hpt_t">Vsemily</div>
                            <div className="hpt_g">guest house</div>
                        </div>

                        <div className="htm_car">
                            <div className="htm_car_t">About us</div>
                            <img className="htm_car_arr" src={arrow} alt="" />
                        </div>
                 </div>
            </div>,
            <HomePageAboutUs />,
            <HomePageFacilities />,
            <HomePageTopRooms />,
            <HomePageTourism /> ,
            <EndCont endTop = {500} />

    ];
}

export default HomePage;
