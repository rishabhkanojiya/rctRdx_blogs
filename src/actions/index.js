import JsonPlaceHolder from "../Api/JsonPlaceHolder";

export const fetchPost = () => async dispatch => {
  const response = await JsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceHolder.get(`/user/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
