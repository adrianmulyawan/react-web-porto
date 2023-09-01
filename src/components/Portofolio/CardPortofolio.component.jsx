import React from 'react';

const CardPortofolioComponent = (props) => {
  const { image, location, role, time } = props;

  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card my-3">
        <img className="card-img-top" src={ image } alt="work-experience" />
        <div className="card-body">
          <h5 className='card-title' style={{ color: 'navy', fontSize: '18px' }}>{ location }</h5>
          <p className="card-text">{ role }</p>
          <small className='text-muted'>{ time }</small>
        </div>
      </div>
    </div>
  );
}

export default CardPortofolioComponent;
