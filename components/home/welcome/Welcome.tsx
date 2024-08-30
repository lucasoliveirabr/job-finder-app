import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { tab, tabText } from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes: string[] = ["Full-time", "Part-time", "Contractor"];

interface Props {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  handleClick: () => void | "";
}

const Welcome: React.FC<Props> = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState<string>("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello again</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setSearchTerm(event.nativeEvent.text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }: { item: string }) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome;