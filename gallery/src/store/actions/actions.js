export const GET_DATA = "GET_DATA";
export const GET_USERS = "GET_USERS";
export const POST_USER = "POST_USER";
export const LOGIN_USER = "LOGIN_USER";
export const BRAND = "BRAND";
export const ACTIVE_BRAND = "ACTIVE_BRAND";
export const MODEL_NAME = "MODEL_NAME";
export const MODEL_DATA = "MODEL_DATA";
export const LOGİN = "LOGİN";

import axios from "axios";

export const getData = () => (dispatch) => {
  axios
    .get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/cars")
    .then((res) => {
      dispatch({ type: GET_DATA, payload: res.data });
    });
};

export const getUsers = () => (dispatch) => {
  axios.get("https://6699284f2069c438cd7179bd.mockapi.io/users").then((res) => {
    dispatch({ type: GET_USERS, payload: res.data });
  });
};

export const postUser = (obj) => (dispatch) => {
  axios
    .post("https://6699284f2069c438cd7179bd.mockapi.io/users", obj)
    .then((res) => {
      dispatch({ type: POST_USER, payload: res.data });
    });
};

export const loginUser = (user) => {
  return { type: LOGIN_USER, payload: user };
};

export const brandName = (name) => {
  return { type: BRAND, payload: name };
};

export const activeBrand = (brand) => {
  return { type: ACTIVE_BRAND, payload: brand };
};

export const modelName = (name) => {
  return { type: MODEL_NAME, payload: name };
};

export const modelData = (data) => {
  return { type: MODEL_DATA, payload: data };
};

export const login = () => {
  return { type: LOGİN };
};
