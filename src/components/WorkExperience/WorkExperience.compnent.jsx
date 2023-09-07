import React from 'react';
import CardWorkComponent from './CardWork.component';

const WorkExperience = () => {
  return (
    <div className='container my-4 py-sm-0 py-md-0 py-lg-3 position-relative' id='experience-component'>
      <h1 className='text-center' style={{ fontWeight: 'bold', color: '#4C70EF', fontSize: '30px', letterSpacing: '5px', marginTop: '0' }}>
        WORK EXPERIENCE
      </h1>
      <div className="row justify-content-center align-items-center py-sm-0 py-md-0 py-lg-2">
        <CardWorkComponent image = 'https://awsimages.detik.net.id/community/media/visual/2022/09/22/universitas-islam-indonesia.jpeg?w=1200' location = 'Universitas Islam Indonesia' role = 'Lecturer Assistant' time = 'Oct 2019 - Nov 2019' />
        <CardWorkComponent image = 'https://sippn.menpan.go.id/images/article/large/whatsapp-image-2022-03-16-at-1029162.jpeg' location = 'Dinas Kelautan dan Perikanan Prov Kalimantan Barat' role = 'Freelance Fullstack Web Developer' time = 'Sept 2021 - Mar 2022' />
        <CardWorkComponent image = 'https://awsimages.detik.net.id/community/media/visual/2022/09/22/universitas-islam-indonesia.jpeg?w=1200' location = 'Universitas Islam Indonesia' role = 'DevOps Internship' time = 'Nov 2018 - Feb 2019' />
      </div>
    </div>
  );
}

export default WorkExperience;
