import React, {useEffect, useState} from 'react';
import TopMenu from '../menu/TopMenu';
import EndCont from '../endCont/EndCont'
import bg from './images/bg_1.png';
import './style.css'
import ring_1 from './images/Ellipse 1.png'
import ring_2 from './images/Ellipse 2.png'
import room_1 from './images/room_1.png'
import room_2 from './images/room_2.png'
import i_bed_s from './images/i_bed-s.png'
import i_bed_t from './images/i_bed-t.png'
import i_coin from './images/i_coin.png'
import i_pers from './images/i_pers.png'

const RoomsPrice = () => {

    useEffect(() => {
        const element = document.querySelector(".bg")
        element.style.backgroundImage = 'url('+bg+')';  
        element.style.backgroundRepeat= 'no-repeat';  
        element.style.backgroundSize= 'cover';  
        element.style.backgroundPosition= 'center';  

            const element_2 = document.querySelectorAll('.bme_1')
            const element_3 = document.querySelectorAll('.bme_2')
            for (let i = 0; i < element_2.length; i++) {
                element_3[i].style.transform = 'scale(150%)'
                element_2[i].style.transform = 'scale(120%)'
                setTimeout(() => {
                element_3[i].style.transform = 'scale(100%)'
                element_2[i].style.transform = 'scale(100%)'
                }, 1000);
            }


            const fr_elements = document.querySelectorAll('.rp_ri_w_front_cnt')
            for (let i = 0; i < fr_elements.length; i++) {

  

                fr_elements[i].addEventListener('click', function(e){
                    this.style.transform = 'rotateY(-70deg)'
    
                    setTimeout(() => {
                        this.parentNode.children[1].style.transform = 'rotateY(0)'
                        this.style.transform = 'rotateY(-180deg)'
                    }, 300);
                })
            }


            const bg_elements = document.querySelectorAll('.rp_ri_w_i_backinfo')
            for (let i = 0; i < bg_elements.length; i++) {
                bg_elements[i].addEventListener('click', function(e){
                    this.style.transform = 'rotateY(-70deg)'

                    setTimeout(() => {
                        this.parentNode.children[0].style.transform = 'rotateY(0)'
                        this.style.transform = 'rotateY(-180deg)'
                    }, 300);
                })
            }

    }, []);

    return [
        <TopMenu />,
        <div>
            <div className="bg"></div>

            <div className="rp_content">
                <div className="rp_row_w">

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="rp_row_w rp_row_w2">
                    <div className="rp_ri_w rp_ri_w2">
                            <div className="rp_ri_w_front_cnt">
                                <div className="rp_ri_w_img_cont ">
                                    <img src={room_2} alt="" className="rp_ri_w_img" />
                                </div>

                                <div  className="btn_more_cont"  >
                                    <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                    <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                    <div className="btn_more_n">more</div>
                                </div>

                                <div className="rp_ri_w_f_info">

                                    <div className="rpriwf_i_tit rpriw3f_i_tit">
                                        Dvoulůžkový
                                    </div>
                                    
                                    <div className="rpriwf_i_cost rpriw3f_i_cost">
                                        150 kč / noc
                                    </div>

                                </div>

                            </div>

                            <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                                <div className="rp_ri_w_i_bi_cont">
                                    <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                    <ul className="rp_ri_w_i_bi-list">
                                        <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                        <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                        <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                    </ul>
            
                                    <div className="rp_ri_w_i_bi-table">

                                        <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                            <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                            <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                        </div>

                                        <div className="rp_ri_w_i_bi-ti">
                                            <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                            <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                        </div>

                                        <div className="rp_ri_w_i_bi-ti">
                                            <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                            <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                        </div>                                  

                                        <div className="rp_ri_w_i_bi-ti">
                                            <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                            <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                        </div>                                       


                                    </div>

                                </div>
                            </div>
                    </div>

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div> 
                </div>

                <div className="rp_row_w">

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rp_ri_w rp_ri_w3">
                        <div className="rp_ri_w_front_cnt">

                            <div className="rp_ri_w_img_cont ">
                                <img src={room_1} alt="" className="rp_ri_w_img" />
                            </div>

                            <div  className="btn_more_cont"  >
                                <img src={ring_1} alt="" className="btn_more_el bme_1" />
                                <img src={ring_2} alt="" className="btn_more_el bme_2" />
                                <div className="btn_more_n">more</div>
                            </div>

                            <div className="rp_ri_w_f_info">

                                <div className="rpriwf_i_tit rpriw3f_i_tit">
                                    Dvoulůžkový
                                </div>
                                
                                <div className="rpriwf_i_cost rpriw3f_i_cost">
                                    150 kč / noc
                                </div>

                            </div>

                        </div>

                        <div className="rp_ri_w_i_backinfo rp_ri_w3_i_backinfo" >
                            <div className="rp_ri_w_i_bi_cont">
                                <div className="rp_ri_w_i_bi-tit rp_ri_txt">Třilůžkový pokoj</div>
                                <ul className="rp_ri_w_i_bi-list">
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz kouření</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Zákaz domácích mazlíčků</li>
                                    <li className="rp_ri_w_i_bi-li rp_ri_txt">- Půjčení konvici</li>
                                </ul>
         
                                <div className="rp_ri_w_i_bi-table">

                                    <div className="rp_ri_w_i_bi-ti rp_ri_w3_i_bi-ti">
                                        <img src={i_pers} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">4 persons</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_coin} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">150 / noc</div>
                                    </div>

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_s} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">1 single bed</div>
                                    </div>                                  

                                    <div className="rp_ri_w_i_bi-ti">
                                        <img src={i_bed_t} alt="" className="rp_ri_w3_i_bi_ti-img" />
                                        <div className="rp_ri_w3_i_bi_ti-val rp_ri_txt">2 twin bed</div>
                                    </div>                                       


                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>,
        <EndCont endTop = {320} />
    ];
}

export default RoomsPrice;
