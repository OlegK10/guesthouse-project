import React, {useState, useEffect} from 'react';
import './style.css'
import foto from './f_1.png'
import './response.css'

const HomePageTourism = () => {

    const [isMb, setIsMb] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMb(window.innerWidth < 650 ? true : false)
        })
    }, []);


    return (
        <div className='hpt_main'>
            <div className="hpt_cont">
                <div className="hpt_content">
                        <div className="hpt_i hpt_i_1">
                            <div className="htp_i_tit">Pravčická brána</div>
                            <img src={foto} alt="" className="hpt_img_i" />
                        </div>

                        <div className="hpt_i hpt_i_2">
                            <div className="htp_i_tit">Pravčická brána</div>
                            <img src={foto} alt="" className="hpt_img_i" />
                        </div>

                    <div className="hpt_i hpt_i_3">
                        <div className="htp_i_tit">Pravčická brána</div>
                        <img src={foto} alt="" className="hpt_img_i" />
                    </div>

                </div>

                <div className="htp_matit">Tourism</div>
                {isMb ? (
                 <div className="htp_next">Další</div>
                ):''}

            </div>
        </div>
    );
}

export default HomePageTourism;
