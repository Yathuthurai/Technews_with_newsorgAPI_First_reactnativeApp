import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getArticles } from "../../state/news/news.actions";
import { ArticleCard } from "../../components";

const Home = ({ getNewsArticles, articles }) => {
  useEffect(() => {
    getNewsArticles();
  }, [getNewsArticles]);

  /*return (
    <View style={styles.container}>
      <ArticleCard
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/ylkmo-8Y0YSS2RZHG-Full-Image_GalleryBackground-en-US-1563440504638._SX1080_.jpg"
        title="News Title"
        source="ABC"
        publishedAt="2020-06-17T16:46:17Z"
      />
    </View>
  );*/

  const renderItem = ({ item }) => (
    <ArticleCard article={item} onPress={() => {}} />
  );

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const mapStateToProps = ({ news }) => ({
  articles: news.articles,
});
export default connect(mapStateToProps, { getNewsArticles: getArticles })(Home);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 35,
  },
  txt_home: {
    fontSize: 20,
  },
});
