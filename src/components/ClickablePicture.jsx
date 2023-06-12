import { useState } from 'react';
import face from '../assets/images/maxence.png';
import faceGlasses from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [withoutGlasses, setWithoutGlass] = useState(true);

  const handleToggle = () => {
    setWithoutGlass((prevState) => !prevState);
  };
  return (
    <div>
      <img
        src={withoutGlasses ? face : faceGlasses}
        alt=""
        onClick={handleToggle}
      />
    </div>
  );
};
export default ClickablePicture;
