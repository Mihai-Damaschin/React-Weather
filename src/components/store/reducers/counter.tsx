const counter = (state: number = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default counter;
