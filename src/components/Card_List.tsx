import React from "react"
import { useState } from "react"
import List from "./List"

function Card_List(){
  const [List, ListSet] = useState<number[]>([]);
  const [Name, NameSet] = useState<string | null>(null);

  return(
    <div>
      <div>
        <button onClick={() => ListSet([...List, List.length+1])}>Add to Array</button>
        {JSON.stringify(List)}
      </div>
        <div>
        <button onClick={() => NameSet("jack")}> Set Name </button>
        {JSON.stringify(Name)}
      </div>
    </div>
  )
}
export default Card_List