import React from 'react';
import myAvatar from '../../assets/my_avatar.svg';

const ProfileComponent = ({ textColor }) => {
  const goMyCV = () => {
    window.open('https://drive.google.com/file/d/1fXO0LL7PB8et3onLTqvviCLTIRkwc6qt/view');
  };

  return (
    <div className="container" id='profile-component'>
      <div className='d-flex justify-content-center align-items-center position-relative' style={{ marginTop: '48px' }}>
        <div className="row py-sm-0 py-md-0 py-lg-2" style={{ width: '100%', maxWidth: '800px' }}>
          <div className="col-sm-12 col-md-6 col-lg-6 my-sm-0 my-md-0 my-lg-4 p-sm-2 p-md-2 p-lg-2">
            <img className='img-fluid my-sm-0 my-md-0 my-4' src={ myAvatar } alt="avatar" style={{ maxWidth: '300px' }} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className='text-start' style={{ fontWeight: 'bold', color: '#4C70EF', fontSize: '30px', letterSpacing: '5px' }}>ABOUT ME</h2>
            <h3 className='text-start my-3' style={{ fontSize: '24px', color: textColor }}>Hello, I'm Adrian Mulyawan</h3>
            <p className='text-start my-3' style={{ fontSize: '18px', color: textColor }}>
              a recent Computer Science graduate from the Islamic University of Indonesia. Proficient in web programming, I actively participated in various roles during my studies: as a teaching assistant, in student organizations, and on committees. Excited to apply my skills and experiences to the professional realm, I'm well-equipped to excel in the dynamic field of web development.
            </p>
            <button className='text-center bg-warning btn btn-md p-2 my-2' style={{ width: '250px', fontWeight: 'bold', color: '#000', fontSize: '14px' }} onClick={ goMyCV }>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
