import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddIcon = ({size, color}) => (
  <Svg viewBox="0 0 512 512" width={size} height={size} color={color}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 176v160m80-80H176"
    />
  </Svg>
);
export default AddIcon;
