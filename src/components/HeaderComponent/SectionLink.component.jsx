import React from 'react';
import { Link } from 'react-router-dom';

const SectionLinkComponent = (props) => {
  const { icon, link } = props;

  const toLink = () => {
    window.open(link);
  }

  return (
    <>
      <div className="col-3">
        <Link onClick={ toLink } target="_blank" rel="noopener noreferrer">
          <img src={icon} alt="link-me" style={{ width: '40px' }} />
        </Link>
      </div>
    </>
  );
}

export default SectionLinkComponent;
