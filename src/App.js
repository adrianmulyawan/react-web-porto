// import logo from './logo.svg';
// import './App.css';
import HeaderComponent from './components/HeaderComponent/header.component';
import PortofolioComponent from './components/Portofolio/portofolio.component';
import ProfileComponent from './components/ProfileComponent/profile.component';
import SkillComponent from './components/SkillComponnet/skill.component';
import WorkExperience from './components/WorkExperience/WorkExperience.compnent';
import FooterComponent from './components/footer.component';
import NavbarComponent from './components/navbar.component';

function App() {
  document.title = 'Adrian Mulyawan'
  return (
    <>
      <NavbarComponent title = 'Adrian Mulyawan' />
      <HeaderComponent />
      <ProfileComponent />
      <SkillComponent />
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
      <FooterComponent />
    </>
  );
}

export default App;
