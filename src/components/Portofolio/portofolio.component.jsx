import React from 'react';
import CardPortofolioComponent from './CardPortofolio.component';
import portoImage from '../../assets/porto-img.jpeg'

const PortofolioComponent = () => {
  return (
    <div className='container my-4 py-sm-0 py-md-0 py-lg-3 position-relative' id='portofolio-component'>
      <h1 className='text-center' style={{ fontWeight: 'bold', color: '#4C70EF', fontSize: '30px', letterSpacing: '5px', marginTop: '0' }}>
        PORTOFOLIO
      </h1>
      <div className="row justify-content-center align-items-center py-sm-0 py-md-0 py-lg-2">
        <CardPortofolioComponent image = { portoImage } project = 'Website Desa Kuala Secapah' url = 'https://kualasecapah.my.id/'/>
        <CardPortofolioComponent image = { portoImage } project = 'React Express JS Games Web' url = 'https://github.com/FSW-29/challenge-chapter-11'/>
        <CardPortofolioComponent image = { portoImage } project = 'Next JS Games App' url = 'https://github.com/FSW-29/ChallengeChapter10'/>
        <CardPortofolioComponent image = { portoImage } project = 'React JS Games App' url = 'https://github.com/FSW-29/ChallengeChapter9'/>
        <CardPortofolioComponent image = { portoImage } project = 'Food Receipe App' url = 'https://react-food-recipe-seven.vercel.app/'/>
        <CardPortofolioComponent image = { portoImage } project = 'SIM Kawasan Konservasi' url = 'https://github.com/adrianmulyawan/salam-konservasi-be'/>
        <CardPortofolioComponent image = { portoImage } project = 'Travel Website' url = 'https://github.com/adrianmulyawan/fullstack-travel'/>
        <CardPortofolioComponent image = { portoImage } project = 'Bootcamp Website' url = 'https://github.com/adrianmulyawan/laracamp'/>
      </div>
    </div>
  );
}

export default PortofolioComponent;
