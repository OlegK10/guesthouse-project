import React from 'react';
import './style.css'
import i_clean from './i_clean.png'
import i_shower from './i_shower.png'
import i_lock from './i_lock.png'
import i_parking from './i_parking.png'
import i_wifi from './i_wifi.png'
import './response.css'
const HomePageFacilities = () => {
    return (
        <div className='hpfac_main noselect'>
            <div className="hpfac_content">
                <div className="hpfac_tit">Facilities</div>

                <div className="hpfac_items_cont">
                    <div className="hpfac_items_content">

                    <div className="hpfac_i_row hpfac_i_row_1">
                            <div className="hpfac_item">
                                <div className="hpfac_i_top">
                                    <div className="hpfac_i_ti">Uklid</div>
                                    <div className="hpfac_i_ico"><img src={i_clean} alt="" className="hpfac_i_ico_img" /></div>
                                </div>
                                <div className="hpfac_i_des">Denní uklid: od 10:00 / při delším pobytu, vyměna ručníků od třetího dne.</div>
                            </div>
                            <div className="hpfac_item">
                                <div className="hpfac_i_top">
                                    <div className="hpfac_i_ti">Wi-fi</div>
                                    <div className="hpfac_i_ico"><img src={i_wifi} alt="" className="hpfac_i_ico_img" /></div>
                                </div>
                                <div className="hpfac_i_des">Wi-Fi pro hosty je zdarma</div>
                            </div>
                            <div className="hpfac_item">
                                <div className="hpfac_i_top">
                                    <div className="hpfac_i_ti">Shower</div>
                                    <div className="hpfac_i_ico"><img src={i_shower} alt="" className="hpfac_i_ico_img" /></div>
                                </div>
                                <div className="hpfac_i_des">Každý pokoj má vlastní koupelnu.</div>
                            </div>
                        </div>
                        

                        <div className="hpfac_i_row hpfac_i_row_2">
                            <div className="hpfac_item">
                                <div className="hpfac_i_top">
                                    <div className="hpfac_i_ti">Parking</div>
                                    <div className="hpfac_i_ico"><img src={i_parking} alt="" className="hpfac_i_ico_img" /></div>
                                </div>
                                <div className="hpfac_i_des">Parkoviště pro hosty je zdarma.</div>
                            </div>
                            <div className="hpfac_item">
                                <div className="hpfac_i_top">
                                    <div className="hpfac_i_ti">Lock</div>
                                    <div className="hpfac_i_ico"><img src={i_lock} alt="" className="hpfac_i_ico_img" /></div>
                                </div>
                                <div className="hpfac_i_des">Nabízime úschovu kol a motorek za symbolický poplatek 1€ / 25Kč</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageFacilities;
