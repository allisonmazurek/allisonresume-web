import React from "react"
import {createContext} from "react"

const initialState = {
  first: "Allison",
  last: "Mazurek"
}

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState)

export default context