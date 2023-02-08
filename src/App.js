import React from "react";
import { BtnUsers } from "./BtnUsers";
import { Input } from "./Input";
import { AppContext, InitialState, reducer } from "./reducer";



export const App = () => {
 
  const [state, dispatch] = React.useReducer(reducer, InitialState)


  return (
<AppContext.Provider value = {{dispatch, state}}>
<Input/>
<BtnUsers/>
</AppContext.Provider>

  );
};
export default App;
