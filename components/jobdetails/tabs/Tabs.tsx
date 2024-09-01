import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles, { btn, btnText } from "./tabs.style";
import { SIZES } from "../../../constants";

interface TabButtonProps {
  name: string;
  activeTab: any;
  onHandleSearchType: any;
}

interface TabsProps {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => (
  <TouchableOpacity
    style={btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs;