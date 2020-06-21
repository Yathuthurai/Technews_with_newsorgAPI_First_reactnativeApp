import newsActionTypes from "./news.types";

const getArticles = () => {
  return {
    type: newsActionTypes.GET_ARTICLES,
  };
};

export { getArticles };
