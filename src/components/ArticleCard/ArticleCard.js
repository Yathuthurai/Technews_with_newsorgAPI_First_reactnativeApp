import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";
import { COLORS } from "../../utils/constants";

const ArticleCard = ({ article, onPress }) => {
  const { title, urlToImage, source, publishedAt } = article;
  return (
    <TouchableOpacity onPress={() => onPress(article)}>
      <Image source={{ uri: urlToImage }} style={styles.card} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.sourceContainer}>
          <Text style={styles.timeAgo}>{source.name}</Text>
        </View>
        <View style={styles.sourceContainero}>
          <Text style={styles.timeAgo}>{moment(publishedAt).fromNow()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({}).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ArticleCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeAgo: {
    color: COLORS.darkerGrey,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },
  sourceContainer: {
    width: "50%",
    flexDirection: "row",
  },
  sourceContainero: {
    width: "50%",
    flexDirection: "row-reverse",
  },
});
