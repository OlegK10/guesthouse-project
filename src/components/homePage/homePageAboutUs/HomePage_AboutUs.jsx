import React from 'react';
import './style.css'
import img_nature from './nature_1.png'
import img_restaurant from './restaurant1.png'
import './response.css'

const HomePageAboutUs = () => {
    return (
        <div className='hpas_main'>
            <div className="hpas_content">
                    
                <div className="hpas_txt">
                        <div className="hpas_txt_cont">
                            <div className="hpas_txt_tit">
                                <div className="hpas_txt_tit_gh">guest house</div>
                                <div className="hpas_txt_tit_v">Vsemily</div>
                            </div>

                            <p className="hpas_txt_text">
                            Se nachází v klidné a tiché části Všemil, které jsou částí obce Jetřichovice, v srdci Národního parku České Švýcarsko. Nabízí ubytování s bezplatným Wi-Fi. Hosté mohou využit zahradu s možnosti grilování a terasu. <br />
                            <br />
                            Všechny pokoje jsou vybaveny moderním nábytkem s vlastní koupelnou. Ložní prádlo, včetně ručníků, je v ceně. Na místě je podávána snídaně, večeři lze objednat v místních restauracích vzdálených cca 3,5 km. Pension Všemily nabízí úschovnu kol, motorek a neplacené parkoviště pro ubytované hosty.
                            </p>
                        </div>
                    </div>
                    
                    <div className="hpas_imgs">
                        <img src={img_restaurant} alt="" className="hpas_i_i hpas_i_ir" />
                        <img src={img_nature} alt="" className="hpas_i_i hpas_i_in" />
                    </div>      
                    <img src={img_restaurant} alt="" className="hpas_i_i_mb hpas_i_ir_mb" />

            </div>
        </div>
    );
}

export default HomePageAboutUs;
