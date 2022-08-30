import { createContext, useEffect, useState } from 'react'
import {
  createUserFromAuth,
  onAuthStateChangeListner
} from '../../utils/firebase'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserFromAuth(user)
      }
      setCurrentUser(user)
      console.log(user)
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
