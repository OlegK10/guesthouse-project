import React, { useState, useEffect } from 'react';
import './style.css';
import img_room from './room.png';
import arrow from './arrow.png';
import beds from './bads.png';
import wifi from './wifi.png';
import shower from './shower.png';
import balcony from './balcony.png';
import towel from './towels.png';
import './response.css';
import arrow_l from './arrow_l.png';

const HomePageTopRooms = () => {
  const [elementNum, setElementNum] = useState(2);
  const [mbActive, setMbActive] = useState(false)
  const [mbBtnNext_r, setMbBtnNext_r] = useState(false);
  const [mbBtnNext_l, setMbBtnNext_l] = useState(false);


  useEffect(()=> {
    window.addEventListener('resize', () => {
        setMbActive(window.innerWidth < 650 ? true : false)
    })
  }, []);




  const handleRightArClick = (e) => {
    const curElementNum = elementNum;
    if(elementNum=== 3){
    setMbBtnNext_r(true);
    }else{
        setElementNum(curElementNum + 1)
        setMbBtnNext_l(false);
        setMbBtnNext_r(false);
        const nextElement = document.querySelector(`.hptr_item_${curElementNum + 1}`);
        const currElement = document.querySelector(`.hptr_item_${curElementNum}`);
        const prevElement = document.querySelector(`.hptr_item_${curElementNum - 1}`);
        // setMbBtnNext(true);
        currElement.style.left = "-200%"
        nextElement.style.right = "0"
        nextElement.style.left = "0"
    }

  };
  
  const handleLeftArClick = (e) => {
    const curElementNum = elementNum ;
    if( elementNum === 1 ){
        setMbBtnNext_l(true);
        return null
    }else{
        setElementNum(curElementNum - 1)
        setMbBtnNext_r(false);
        setMbBtnNext_l(false);
        const nextElement = document.querySelector(`.hptr_item_${curElementNum + 1}`);
        const currElement = document.querySelector(`.hptr_item_${curElementNum}`);
        const prevElement = document.querySelector(`.hptr_item_${curElementNum - 1}`);
        currElement.style.right = "-200%"
        prevElement.style.left = "0"
        prevElement.style.right = "0"
    }
  };

  return (
    <div className='hptr_main'>
      <div className='hptr_content'>
        <div className='hptr_tit'>Top rooms</div>

        <div className='hptr_items_cont'>
          <div className='hptr_items_content'>

                        
                        <div className='hptr_item hptr_item_1'>
                        <img src={img_room} alt='' className='hptr_img' />
                        <div className='htpr_i_ti htpr_t'>more </div>
                        <div className='htpr_topIcons'>
                            <div className='htpr_topIcoContetn'>
                            <div className='bdcir'>4</div>{' '}
                            <img src={beds} alt='' className='htpr_ti_i' />
                            <img src={wifi} alt='' className='htpr_ti_i' />
                            <img src={shower} alt='' className='htpr_ti_i' />
                            <img src={balcony} alt='' className='htpr_ti_i' />
                            <img src={towel} alt='' className='htpr_ti_i' />
                            </div>
                        </div>
                        <div className='htpr_i_tit htpr_t'>Rodinny pokoj1</div>
                        <div className='htpr_i_cost htpr_t'>150kč / noc</div>
                        </div>

                        <div className="hptr_item hptr_item_2">
                            <img   src={img_room} alt="" className="hptr_img" />
                            <div className="htpr_i_ti htpr_t">more </div>
                                <div className="htpr_topIcons">
                                    <div className="htpr_topIcoContetn">
                                       <div className="bdcir">4</div> <img src={beds} alt="" className="htpr_ti_i" />
                                        <img src={wifi} alt="" className="htpr_ti_i" />
                                        <img src={shower} alt="" className="htpr_ti_i" />
                                        <img src={balcony} alt="" className="htpr_ti_i" />
                                        <img src={towel} alt="" className="htpr_ti_i" />
                                    </div>
                                </div>
                            <div className="htpr_i_tit htpr_t">Rodinny pokoj2</div>
                            <div className="htpr_i_cost htpr_t">150kč / noc</div>
                        </div>

                        <div className="hptr_item hptr_item_3">
                            <img   src={img_room} alt="" className="hptr_img" />
                            <div className="htpr_i_ti htpr_t">more </div>
                                <div className="htpr_topIcons">
                                    <div className="htpr_topIcoContetn">
                                       <div className="bdcir">4</div> <img src={beds} alt="" className="htpr_ti_i" />
                                        <img src={wifi} alt="" className="htpr_ti_i" />
                                        <img src={shower} alt="" className="htpr_ti_i" />
                                        <img src={balcony} alt="" className="htpr_ti_i" />
                                        <img src={towel} alt="" className="htpr_ti_i" />
                                    </div>
                                </div>
                            <div className="htpr_i_tit htpr_t">Rodinny pokoj3</div>
                            <div className="htpr_i_cost htpr_t">150kč / noc</div>
                        </div>

                        <div className="mb_slider_arrows">
     

                        {!mbBtnNext_r & mbActive ?  (
                                <img src={arrow} onClick={handleRightArClick} alt="" className="noselect mb_s_ar mb_s_arr" />
                            ): mbActive ? (
                                <div className="btnMbNext_r btnMbNext">Víc</div>
                            ) :'' }
                             {!mbBtnNext_l & mbActive ?  (
                                <img src={arrow_l} onClick={handleLeftArClick} alt="" className="noselect mb_s_ar mb_s_arl" />
                            ): mbActive ?(
                                <div className="btnMbNext_l btnMbNext">Víc</div>
                            ) : '' }
                  
                        </div>


                        <div className="hptr_arrow">
                            <img src={arrow} alt="" className="hptr_arr_img" />
                        </div>
                    </div>
                    
                    <div className="mp_d_btn">
                        <button 
                        className="mp_d_btn_i">
                            Další
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default HomePageTopRooms;
