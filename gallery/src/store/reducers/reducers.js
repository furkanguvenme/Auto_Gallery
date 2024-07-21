import {
  ACTIVE_BRAND,
  GET_DATA,
  GET_USERS,
  LOGIN_USER,
  POST_USER,
  BRAND,
  MODEL_NAME,
  MODEL_DATA,
} from "../actions/actions";

const initialState = {
  darkMode: false,
  carData: null,
  usersData: [],
  loginUser: {},
  brand: "Toyota",
  activeBrandData: [],
  model: "",
  modelData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, carData: action.payload };
    case GET_USERS:
      return { ...state, usersData: action.payload };
    case POST_USER:
      return { ...state, usersData: [...state.usersData, action.payload] };
    case LOGIN_USER:
      return { ...state, loginUser: action.payload };
    case BRAND:
      return { ...state, brand: action.payload };
    case ACTIVE_BRAND:
      return { ...state, activeBrandData: action.payload };
    case MODEL_NAME:
      return { ...state, model: action.payload };
    case MODEL_DATA:
      return { ...state, modelData: action.payload };
    default:
      return state;
  }
};
