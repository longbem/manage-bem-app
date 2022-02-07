import React from 'react';
import Svg, {Circle} from 'react-native-svg';

export const IconRadio_UnCheck = ({color, size}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="12.5"
        cy="12.5"
        r="10.25"
        fill="white"
        stroke="#C4C4C4"
        stroke-width="0.5"
      />
    </Svg>
  );
};
