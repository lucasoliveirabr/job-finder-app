import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
import { btnImg } from "./screenheader.style";

interface Props {
  iconUrl: any;
  dimension: any;
  handlePress?: any;
}

const ScreenHeaderBtn: React.FC<Props> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;