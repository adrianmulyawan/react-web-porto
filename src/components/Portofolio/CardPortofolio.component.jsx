import React from 'react';

const CardPortofolioComponent = (props) => {
  const { image, project, url } = props;

  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card my-3">
        <img className="card-img-top" src={ image } alt="work-experience" />
        <div className="card-body">
          <h5 className='card-title' style={{ color: 'navy', fontSize: '18px' }}>{ project }</h5>
          <a href={ url } className='btn bg-warning p-2 my-2' target='_blank' rel='noreferrer' style={{ fontWeight: 'bold', fontSize: '12px' }}>Show Project</a>
        </div>
      </div>
    </div>
  );
}

export default CardPortofolioComponent;
