import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

import { checkImageURL } from "../../../../utils";

interface Props {
  job: any;
  handleNavigate: any;
}

const NearbyJobCard = ({ job, handleNavigate }: Props) => {
  return (
    <View style={{ justifyContent: "space-between" }}>
      <TouchableOpacity
        style={styles.container}
        onPress={handleNavigate}
      >
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(job.employer_logo)
                ? job.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {job.job_title}
          </Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NearbyJobCard;