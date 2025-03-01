import {TouchableOpacity} from 'react-native';
import {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconProps} from 'react-native-vector-icons/Icon';

type ComponentProps = {
  onPressIcon?: () => void;
};

type Props = ComponentProps & IconProps;

const Icon: FC<Props> = ({
  size = 18,
  color = '#666',
  onPressIcon,
  name,
  style,
}) => (
  <TouchableOpacity
    onPress={onPressIcon}
    disabled={!onPressIcon}
    activeOpacity={onPressIcon ? 0.7 : 1}>
    <Ionicons size={size} name={name} color={color} style={style} />
  </TouchableOpacity>
);

export default Icon;
