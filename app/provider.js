'use client'

import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from './_context/UserDetailsContext'

const Provider = ({children}) => {

    const {user, isLoaded} = useUser()
    // console.log(user)

    const [userDetails , setUserDetails] = useState(null)

    useEffect(() => {
        user && VerifyUser()
    }, [isLoaded])

    // verify user
    const  VerifyUser = async() => {
        const response = await  axios.post('/api/verify-user', {
            user: user
        })
        setUserDetails(response.data.result[0])

        // console.log("response",response.data)
    }

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
    <div>
      {children}
    </div>
    </UserDetailsContext.Provider>
  )
}

export default Provider
