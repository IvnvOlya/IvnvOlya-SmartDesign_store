const goods = (state = [], action) => {
  switch (action.type) {
    case "ADD_GOODS":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          price: action.price,
        },
      ];
    default:
      return state;
  }
};
export default goods;
