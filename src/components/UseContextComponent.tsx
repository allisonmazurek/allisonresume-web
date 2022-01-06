import React, { useContext } from "react"
import { useState } from "react"
import UserContext, { UserState } from './store'

function ConsumerComponent(){
  const user = useContext(UserContext)

  return(
    <div>
      <div>first: {user.first}</div>
    </div>
  )
}

function UseContextComponent(){
  const [user, userState] = useState<UserState>({
    first: "Jane",
    last: "Doe"
  });

  return(
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => userState({
          first: "Jose",
          last: "Whales",
           })
       }>
      </button>
    </UserContext.Provider>
  )
}

export default UseContextComponent