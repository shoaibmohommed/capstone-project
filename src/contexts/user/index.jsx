import { createContext, useEffect, useReducer } from 'react'
import {
  createUserFromAuth,
  onAuthStateChangeListner
} from '../../utils/firebase'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const INTIAL_STATE = {
  currentUser: null
}
export const SET_CURRENT_USER_ACTION_TYPE =
  'SET_CURRENT_USER'
export const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_USER_ACTION_TYPE:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(
        `Unhandled type ${type} in userReducer`
      )
  }
}
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(
    userReducer,
    INTIAL_STATE
  )
  const setCurrentUser = (user) => {
    dispatch({
      type: SET_CURRENT_USER_ACTION_TYPE,
      payload: user
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  const value = { currentUser, setCurrentUser }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
