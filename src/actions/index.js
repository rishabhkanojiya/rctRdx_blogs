import JsonPlaceHolder from "../Api/JsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));
  //                      ^
  //                     ||
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPost = () => async dispatch => {
  const response = await JsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/**
 Using Lodash memoize
|--------------------------------------------------
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await JsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
|--------------------------------------------------
*/

/**
 * Redux thunk Syntax:
|--------------------------------------------------
const name = (params) => async (dispatch) => {
    const resonse = await <API REQUEST>
    dispatch({ type: , payload:  });
 }
|--------------------------------------------------
*/

/**OG action for fetchUser 
|--------------------------------------------------
export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

|--------------------------------------------------
*/
