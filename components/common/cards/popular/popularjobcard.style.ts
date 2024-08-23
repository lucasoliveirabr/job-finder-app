import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

const container = (selectedJob: any, item: any) => ({
  width: 250,
  padding: SIZES.xLarge,
  backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
  borderRadius: SIZES.medium,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

const logoContainer = (selectedJob: any, item: any) => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
  borderRadius: SIZES.medium,
  justifyContent: "center",
  alignItems: "center",
});

const jobName = (selectedJob: any, item: any) => ({
  fontSize: SIZES.large,
  fontFamily: FONT.medium,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

const publisher = (selectedJob: any, item: any) => ({
  fontSize: SIZES.medium - 2,
  fontFamily: FONT.bold,
  color: selectedJob === item?.job_id ? COLORS.white : COLORS.primary,
});

export { container, logoContainer, jobName, publisher }
export default styles;