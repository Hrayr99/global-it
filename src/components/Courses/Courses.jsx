import React from 'react';
import cours from './Courses.module.css';
import { Link } from 'react-router-dom';
import FrontCours from './FrontCours/FrontCours';

function Courses(props) {
  return (
    <div className={cours.parent__div}>
      <div className={cours.title}>Դասընթացներ</div>
      <div className={cours.general}>
        <FrontCours />
        <FrontCours />
      </div>
    </div>
  );
}

export default Courses;
