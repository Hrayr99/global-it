import React from 'react';
import fc from './FrontCours.module.css';
import { Link } from 'react-router-dom';

function FrontCours(props) {
  return (
    <div className={fc.left__right}>
      <div className={fc.parentDIv__left}>
        <div className={fc.front_img}></div>
        <h3 className={fc.front_title}>Front-end</h3>
        <div className={fc.more__info}>
          <div>
            <div className={fc.programming}>ծրագրավորում</div>
            <div className={fc.about__webprog}>
              Վեբ ծրագրավորումը ներկայումս աշխատաշուկայում ամենապահանջված
              մասնագիտություններից է։ Այն բաժանվում է 2 հիմնական
              մասնագիտացումների՝ Front-End և Back-End ծրագրավորում, որոնցից
              յուրաքանչյուրն ունի...
            </div>
          </div>
          <div className={fc.student__conteiner}>
            <ul>
              <li>
                <div className={fc.student1}></div>
                <div className={fc.student__info1}>3-5 անձ</div>
              </li>
              <li>
                <div className={fc.student2}></div>
                <div className={fc.student__info2}>1-2 անձ</div>
              </li>
              <li>
                <div className={fc.date}></div>
                <div className={fc.student__info3}>4-6 ամիս</div>
              </li>
              <li>
                <div className={fc.stars__img}></div>
              </li>
            </ul>
          </div>
        </div>
        <div className={fc.buttons}>
          <Link to={'/moreInfo'} className={fc.bnt__link}>
            Դիմել
          </Link>
          <Link to={'/moreInfo'} className={fc.bnt__link}>
            Ուս․ ծրագիր
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FrontCours;
