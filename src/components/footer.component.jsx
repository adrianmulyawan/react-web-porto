import React, { useEffect, useState } from 'react';

const FooterComponent = ({ textColor }) => {
  const [bgColor, setBgColor] = useState('bg-light');
  const [txtColor, setTxtColor] = useState('text-dark')

  useEffect(() => {
    // Use useEffect to set the background and text color based on the textColor prop
    if (textColor === 'black') {
      
      setBgColor('bg-light');
      setTxtColor('text-dark');
    } else {
      setBgColor('bg-dark');
      setTxtColor('text-white');
    }
    console.info(textColor)
  }, [textColor]);

  return (
    <footer className="text-center text-white">
      <div className={`${bgColor} text-center ${txtColor} p-3`}>
        © 2023 Copyright Adrian Mulyawan With Love
      </div>
    </footer>
  );
}

export default FooterComponent;
