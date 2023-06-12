import React,{ useEffect} from 'react';
import './style.css'
import i_ig from './i_ig.png'
import i_fb from './i_fb.png'
import './response.css'

const EndCont = (props) => {


    useEffect(() => {
     document.querySelector('.ec_main').style.top = `${props.endTop}%`
    }, []);


    return (
        <div className='ec_main'>
            <div className="ec_content">

                <div className="ec_item ec_item_1">
                    <div className="ect_1_tit eci_tit">About us</div>
                    <div className="ect_1_txt">Penzion Všemily se nachází v klidné Všemil, které jsou částí obce Jetřichovice, v srdci Národního parku České Švýcarsko.
                            Nabízí ubytování s bezplatným Wi-Fi. Hosté mohou využit zahradu s možnosti grilování a terasu. </div>
                </div>

                <div className="ec_item ec_item_2">
                    <div className="eci_2_tit eci_tit">Prozkoumat</div>
                    <ul className="eci_2_ul">
                        <li key="eci1" className="eci_2_i">Home</li>
                        <li key="eci2" className="eci_2_i">Rooms & pricing</li>
                        <li key="eci3" className="eci_2_i">Restaurant</li>
                        <li key="eci4" className="eci_2_i">Tourism</li>
                        <li key="eci5" className="eci_2_i">Contact</li>
                    </ul>
                </div>

                <div className="ec_item ec_item_3">
                    <div className="eci_3_tit eci_tit">Kontakt</div>
                    <ul className="eci_3_ul">
                        <li key="eciw4" className="eci_3_i">
                            <div className="eci_3i_t">Adresa : </div>
                            <div className="eci_3i_o"> Všemily 23, 40502 Jetřichovice</div>
                        </li>

                        <li key="eciw1" className="eci_3_i">
                            <div className="eci_3i_t">Telefon : </div>
                            <div className="eci_3i_o"> 784 845 552</div>
                        </li>

                        <li key="eciw2" className="eci_3_i">
                            <div className="eci_3i_t">E-mail : </div>
                            <div className="eci_3i_o"> safasf@gamal.com</div>
                        </li>

                        <li key="eciw3" className="eci_3_i eci_3_igi">
                            <div className="eci_3i_t">
                                <img src={i_ig} alt="" className="eci_3i_img" /> &
                                <img src={i_fb} alt="" className="eci_3i_img" /> : 
                            </div>
                            <div className="eci_3i_o">penzionvsemily</div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default EndCont;
