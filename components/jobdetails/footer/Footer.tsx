import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";

interface Props {
  url: string;
}

const Footer: React.FC<Props> = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={require("../../../assets/icons/heart-ol.png")}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;