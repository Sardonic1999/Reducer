export const reduser = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + 1 };
    case "minus":
      if (state.counter === 0) return state;
      else return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
