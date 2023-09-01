import React from 'react';
import bgImage from '../../assets/background-image.jpg';
import githubIc from '../../assets/github-ic.svg';
import gitlabIC from '../../assets/gitlab-ic.svg';
import instagramIc from '../../assets/instagram-ic.svg';
import linkedIc from '../../assets/linkedin-ic.svg';
import SectionLinkComponent from './SectionLink.component';

const HeaderComponent = () => {
  const sectionStyle = {
    height: '60vh',
    width: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
  };

  return (
    <>
      <section className="section-header position-relative" style={sectionStyle}>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 className='text-center' style={{ color: '#fff', letterSpacing: '10px', fontSize: '35px', fontWeight: 'bold' }}>
              Adrian Mulyawan
            </h1>
            <p className="text-center my-2" style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>
              Life Long Learner | Junior Programmer | Fullstack Dev
            </p>
            <div className="d-flex justify-content-center align-items-center my-3">
              <div className="row justify-content-center">
                <SectionLinkComponent icon={githubIc} link='https://github.com/adrianmulyawan' />
                <SectionLinkComponent icon={gitlabIC} link='https://gitlab.com/adrmulyawan' />
                <SectionLinkComponent icon={instagramIc} link='https://www.instagram.com/adrianmulyawan/' />
                <SectionLinkComponent icon={linkedIc} link='https://www.linkedin.com/in/adrian-mulyawan-2a0251164/' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
