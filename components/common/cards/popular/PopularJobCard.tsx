import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { container, logoContainer, jobName, publisher } from "./popularjobcard.style";

interface Props {
  item: any;
  selectedJob?: any;
  handleCardPress?: any;
}

const PopularJobCard = ({ item, selectedJob, handleCardPress }: Props) => {
  return (
    <View style={{ justifyContent: "space-between" }}>
      <TouchableOpacity
        style={container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}

export default PopularJobCard;