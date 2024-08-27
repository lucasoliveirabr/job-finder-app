import { View, Text } from "react-native";

import styles from "./specifics.style";

interface Props {
  title: string;
  points: any;
}

const Specifics: React.FC<Props> = ({ title, points }) => {
  return (
    <View>
      <Text>Specifics</Text>
    </View>
  )
}

export default Specifics;