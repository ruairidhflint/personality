import { useState } from 'react';

import { selfPerceptionContent } from '../Constants/Questions';
import SelfPerceptionSlider from '../Components/SelfPerceptionSlider.js';

const SliderContainer = ({ history }) => {
  const [position, setPosition] = useState(0);
  return (
    <>
      <SelfPerceptionSlider
        quadrant={selfPerceptionContent[position]}
        setPosition={setPosition}
        history={history}
      />
    </>
  );
};

export default SliderContainer;
