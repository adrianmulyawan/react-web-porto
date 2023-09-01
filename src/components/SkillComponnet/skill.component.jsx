import React from 'react';
import ImageSkillComponent from './imageSkill.component';
import html from '../../assets/icons8-html.svg';
import css from '../../assets/icons8-css3.svg';
import javascript from '../../assets/icons8-javascript.svg';
import php from '../../assets/icons8-php.svg';
import nodejs from '../../assets/icons8-node-js.svg';
import laravel from '../../assets/icons8-laravel-48.png';
import express from '../../assets/icons8-express-js.svg';
import kotlin from '../../assets/icons8-kotlin.svg';
import react from '../../assets/icons8-react.svg';
import redux from '../../assets/icons8-redux.svg';
import vue from '../../assets/icons8-vuejs.svg';
import git from '../../assets/icons8-git.svg';
import bootstrap from '../../assets/icons8-bootstrap.svg';
import daisy from '../../assets/icons8-blossom-48.png';

const SkillComponent = ({ textColor }) => {
  return (
    <div className='container my-5 py-sm-0 py-md-0 py-lg-3 position-relative'>
      <h1 className='text-center' style={{ fontWeight: 'bold', color: '#4C70EF', fontSize: '30px', letterSpacing: '10px', marginTop: '48px' }}>
        WHAT I DO
      </h1>
      <h3 className='text-center my-3' style={{ fontWeight: 'bold', fontSize: '30px', letterSpacing: '5px', color: textColor }}>
        SPECIALIZATION IN
      </h3>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="row justify-content-start">
          <ImageSkillComponent image = { html } />
          <ImageSkillComponent image = { css } />
          <ImageSkillComponent image = { javascript } />
          <ImageSkillComponent image = { php } />
          <ImageSkillComponent image = { nodejs } />
          <ImageSkillComponent image = { laravel } />
          <ImageSkillComponent image = { express } />
          <ImageSkillComponent image = { kotlin } />
          <ImageSkillComponent image = { react } />
          <ImageSkillComponent image = { redux } />
          <ImageSkillComponent image = { vue } />
          <ImageSkillComponent image = { git } />
          <ImageSkillComponent image = { bootstrap } />
          <ImageSkillComponent image = { daisy } />
        </div>
      </div>
    </div>
  );
}

export default SkillComponent;
