import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

interface FullQuery {
  query: string;
  page: string;
  num_pages: string;
  date_posted: string;
}

const values: any = [1, 2, 3, 4, 5, 6, 7, 8];

const Popularjobs: React.FC = () => {
  const router = useRouter();

  const full_query: FullQuery = { query: "React Developer", page: "1", num_pages: "1", date_posted: "all" };

  const { data, isLoading, error } = useFetch({ endpoint: "search", full_query: full_query });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <FlatList
            data={values}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs;