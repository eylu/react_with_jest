export default (state = {}, action = {}) => {
  switch (action.type) {
    case "SET_STORAGE":
      localStorage.setItem(action.payload.key, action.payload.value);
      return state;
      break;

    case "DEL_STORAGE":
      localStorage.removeItem(action.payload.key);
      return state;
      break;

    default:
      return state;
  }
};
