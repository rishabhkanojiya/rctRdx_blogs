import JsonPlaceHolder from "../Api/JsonPlaceHolder";

export const fetchPost = () => async dispatch => {
  const response = await JsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response });
};
