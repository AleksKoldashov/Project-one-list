import React from "react";

export const AppContext = React.createContext();

export const InitialState = {
  root: {
    users: "users",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "update_users":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
