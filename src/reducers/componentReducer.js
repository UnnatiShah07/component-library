export const componentStates = {
  activeComponent: "avatar",
};

export const componentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_ACTIVE_COMPONENT":
      return { ...state, activeComponent: payload };
    default:
      return state;
  }
};
