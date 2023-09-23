const contactFormReducer = (state = [], action) => {
  switch (action.type) {
    case "formDelivery":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export { contactFormReducer };
