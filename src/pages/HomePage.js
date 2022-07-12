import React, { useContext } from 'react'
import { UserContext } from '../hooks/useContext'
export const HomePage = () => {
    const {user} =useContext(UserContext)
    return (
        <div>
        <h2>HomePage {user.username}</h2>
        </div>
    )
}
