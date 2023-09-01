import React from 'react';

const ImageSkillComponent = (props) => {
  const { image } = props;
  return (
    <>
      <div className="col">
        <img src={ image } alt="my-skill" style={{ maxWidth: '50px' }} />
      </div>
    </>
  );
}

export default ImageSkillComponent;
