import React, { useContext, useState } from "react";
import { AppContext } from "./reducer";

export function BtnUsers ({numberUsers}){
    const {state} = useContext(AppContext)
    console.log("BtnUsers", state.root.users)
    const [user, setUser] = useState('')
    numberUsers = state.root.users

    const search = (numberUsers) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${numberUsers}`)
          .then((response) => response.json())
          .then((json) => setUser(json));  
      }
return(
    <div>
        <button onClick={()=> search(numberUsers)}>User</button>
        {user && (
        <div>
          {/* <div>Id: {user.id}</div> */}
          <div>Имя: {user.name}</div>
          <div>email: {user.email}</div>
          <div>Имя пользователя: {user.username}</div>
          <div>улица {user.address.street}, дом:{user.address.suite}
          
          </div>
          
          
        </div>
      )}
    </div>
)

}
