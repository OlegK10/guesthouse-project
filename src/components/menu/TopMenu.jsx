import React, { useState, useEffect } from 'react';
import './style.css';
import i_lamp_lon from './i_lamp_lon.png';
import i_lamp_loff from './i_lamp_loff.png';
import i_lamp_loff_d from './i_lamp_off_d.png';
import i_lamp_lon_d from './i_lamp_on_d.png';
import './response.css'
import i_melines from './menu_lines.png'
import i_lang from './i_lang.png'

const TopMenu = () => {
  const [activeLampOn, setActiveLampOn] = useState(i_lamp_lon);
  const [activeLampOff, setActiveLampOff] = useState(i_lamp_loff);
  const [activeMenu, setActiveMenu] = useState(true)
  const [activeMenuCont, setActiveMenuCont] = useState(false)

  const [isLampOn, setIsLampOn] = useState(true);
  const handleLampClick = (e) => {
    setIsLampOn(!isLampOn);
  };
  const lampSrc = isLampOn ? activeLampOn : activeLampOff;

  useEffect(() => {
    setActiveMenu(window.innerWidth > 830 ? true : false)

    function handleScroll() {
      const scrollYpos = 300;
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll('.nedTchC');

      elements.forEach((element) => {
        if (scrollPosition > scrollYpos) {
          element.style.color = 'var(--c-dark)';
        } else {
          element.style.color = 'var(--c-white)';
        }
      });
      const menuContent = document.querySelector('.menu_content');
      menuContent.style.backgroundColor = scrollPosition > scrollYpos ? 'var(--c-white)' : '';
      menuContent.style.boxShadow = scrollPosition > scrollYpos ? '0px 4px 20px -2px rgba(0, 0, 0, 0.25)' : '';

      setActiveLampOn(scrollPosition > scrollYpos ? i_lamp_lon_d : i_lamp_lon);
      setActiveLampOff(scrollPosition > scrollYpos ? i_lamp_loff_d : i_lamp_loff);
    }


    function responseResize() {
      setActiveMenu(window.innerWidth > 830 ? true : false)
    }

    window.addEventListener('resize', responseResize);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const menuHandleClick = (e) => {
    setActiveMenuCont(true)
    setLangActive(false)
  }
 
  const menuCloseHandleClick = (e) => {
    setActiveMenuCont(false)
  }

  const [langActive, setLangActive] = useState(false)

  const hadleLangClose = () => {
    setLangActive(false)
  }
  const hadleLangOpen = () => {
    setActiveMenuCont(false)
    setLangActive(true)
  }

    return (
        <div className="menu noselect">
            <div className="menu_cont">
                <div className="menu_content">
                    <div className="menu_left">
                      <img onClick={hadleLangOpen} src={i_lang} alt="" className="i_lang" />
                      
                      {langActive ? (
                        <div className="langs_list">
                          <div onClick={hadleLangClose} className="lang_close">X</div>
                            <ul className="lang_ul">
                            <li className="lang_li">
                              Čeština
                            </li>
                            <li className="lang_li">
                              English
                            </li>
                            <li className="lang_li">
                              Geutch
                            </li>
                          </ul>
                        </div>
                          ): ''}

                        <div className="ml_logo">
                            <div className="ml_logo_v nedTchC">Vsemily</div>
                            <div className="ml_logo_gs nedTchC">guest house</div>
                        </div>
                        <img src={lampSrc} alt="" onClick={handleLampClick} className="i_lamp_li noselect" />

                    </div>

                    {activeMenu ? (
                      <div className="menu_right_cont">
                        <div className="menu_right_content">
                          <div key="mrcI1" className="mrc_item nedTchC mrcactive">Home</div>
                          <div key="mrcI2" className="mrc_item nedTchC">Pokoje & Ceny</div>
                          <div key="mrcI3" className="mrc_item nedTchC">Informace</div>
                          <div key="mrcI4" className="mrc_item nedTchC">Turistika</div>
                          <div key="mrcI5" className="mrc_item nedTchC">Kontakt</div>
                        </div>
                      </div>
                    ) : (
                      <div className="mob_mer">
                        <div onClick={menuHandleClick} className="mobMen_btn"><img src={i_melines} alt="" className="mobmbt_img" /></div>

                          {activeMenuCont ? (
                            <div className="mobMenCont">
                              <div onClick={menuCloseHandleClick} className="mobMenContClose">X</div>
                            <div key="mrcIs1" className="mob_mrc_item mobNedTchC">Home</div>
                            <div key="mrcIs2" className="mob_mrc_item mobNedTchC">Pokoje & Ceny</div>
                            <div key="mrcIs3" className="mob_mrc_item mobNedTchC">Informace</div>
                            <div key="mrcIs4" className="mob_mrc_item mobNedTchC">Turistika</div>
                            <div key="mrcIs5" className="mob_mrc_item mobNedTchC">Kontakt</div>
                          </div>
                          ) : ''}

                      </div>
                    )}






                </div>
            </div>
        </div>
    );
}

export default TopMenu;
