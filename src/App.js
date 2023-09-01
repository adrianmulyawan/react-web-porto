// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent/header.component';
import PortofolioComponent from './components/Portofolio/portofolio.component';
import ProfileComponent from './components/ProfileComponent/profile.component';
import SkillComponent from './components/SkillComponnet/skill.component';
import WorkExperience from './components/WorkExperience/WorkExperience.compnent';
import FooterComponent from './components/footer.component';
import NavbarComponent from './components/navbar.component';

function App() {
  document.title = 'Adrian Mulyawan';

  const [textColor, setTextColor] = useState('black');

  const changeTextColor = () => {
    // Toggle text color between black and white
    setTextColor(textColor === 'black' ? 'white' : 'black');
  };


  return (
    <>
      <NavbarComponent title = 'Adrian Mulyawan' changeTextColor = { changeTextColor } />
      <HeaderComponent />
      <ProfileComponent textColor = { textColor } />
      <SkillComponent textColor = { textColor } />
      <div className='container d-flex justify-content-center align-items-center position-relative' style={{ marginTop: '48px', overflowX: 'hidden' }}>
        {/* Konten Anda */}
        <div className="row justify-content-center align-items-center">
          <hr className="bg-primary py-1" style={{ width: '450px', borderRadius: '100px' }} />
        </div>
      </div>
      <WorkExperience />
      <div className='container d-flex justify-content-center align-items-center position-relative' style={{ marginTop: '48px', overflowX: 'hidden' }}>
        {/* Konten Anda */}
        <div className="row justify-content-center align-items-center">
          <hr className="bg-primary py-1" style={{ width: '450px', borderRadius: '100px' }} />
        </div>
      </div>
      <PortofolioComponent />
      <FooterComponent textColor = { textColor } />
    </>
  );
}

export default App;
