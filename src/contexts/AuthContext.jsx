import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    // State
    const [isAuthenticated, setAuthentication] = useState(false)

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    // context data
    const authContextData = {
        isAuthenticated,
        toggleAuth
    }

    // return
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider