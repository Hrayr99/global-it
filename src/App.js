import React, { useState } from 'react';
import 'normalize.css';
import './style/style.scss';
import Header from './components/Header';
import Section from './components/Section';
import HeaderBottom from './components/HeaderBottom';
import development1 from './components/development1.svg';
import Courses from '../src/components/Courses/Courses';

// import frontImg from '../src/img/frontImg.png';
// import backImg from '../src/img/backImg.png';

let data = {
  // data01 : {
  img: { development1 },
  title: 'Պրոֆեսիոնալ մոտեցում',
  p: `Մեր մասնագետները ամեն ինչ կանեն որ ձեզ 
            ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և 
            բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։`,
  // }
};

// let coursesData = {
//   img1: { frontImg },
//   img2: { backImg },
//   title: '',
//   p: '',
// };

function App() {
  let [dark, setDark] = useState(JSON.parse(localStorage.getItem('darkMode')));
  const darkMode = (e) => {
    if (e.target.checked) {
      localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
      localStorage.setItem('darkMode', 'null');
    }
    setDark((prev) => (prev = JSON.parse(localStorage.getItem('darkMode'))));
  };
  console.log(dark);

  return (
    <div className='App'>
      <div
        className='dark__mode'
        style={dark ? { display: 'none' } : { display: 'block' }}
      ></div>

      <div className='wrapper'>
        <Header darkMode={darkMode} dark={dark} />
        <Section />
        <HeaderBottom data={data} />
        <Courses />
      </div>
    </div>
  );
}

export default App;
