import React from 'react';

const SectionLinkComponent = (props) => {
  const { icon, link } = props;

  return (
    <>
      <div className="col-3">
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <img src={icon} alt="link-me" style={{ width: '40px' }} />
        </a>
      </div>
    </>
  );
}

export default SectionLinkComponent;
