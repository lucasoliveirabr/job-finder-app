import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
//import { container, logoContainer, jobName, publisher } from "./popularjobcard.style";

import { checkImageURL } from "../../../../utils";

interface Props {
  job: any;
  handleNavigate: any;
}

const NearbyJobCard = ({ job, handleNavigate }: Props) => {
  return (
    <View style={{ justifyContent: "space-between" }}>
      <TouchableOpacity
        style={container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >
        <View style={[logoContainer(selectedJob, item), { justifyContent: "center", alignItems: "center" }]}>
          <Image
            source={{
              uri: checkImageURL(item.employer_logo)
                ? item.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

        <View style={styles.infoContainer}>
          <Text style={jobName(selectedJob, item)} numberOfLines={1}>
            {item.job_title}
          </Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NearbyJobCard;