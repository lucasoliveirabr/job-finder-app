import { View, Text } from "react-native";

import styles from "./specifics.style";

interface Props {
  title: string;
  points: string[];
}

const Specifics: React.FC<Props> = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        {points.map((item: string, index: number) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics;