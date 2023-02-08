import React, { useState } from "react";
import { AppContext } from "./reducer";

export function Input() {
  const { state, dispatch } = React.useContext(AppContext);

  const [text, setText] = useState("");
  console.log("Input 8", state.root.users); // Консолька
  const setTextDispatch = (e) => {
    const localText = e.target.value;
    setText(localText);
    dispatch({
      type: "update_users",
      payload: {
        root: {
          users: localText,
        },
      },
    });
  };

  return (
    <div className="container pt-3 ">
      <input value={text} onChange={setTextDispatch} />
      {state.root.users}
    </div>
  );
}
