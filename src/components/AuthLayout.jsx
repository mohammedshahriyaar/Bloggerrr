// //this tells how routes are protected

// import React from 'react'
// import { useState,useEffect } from 'react'
// import {useSelector} from "react-redux"
// import {useNavigate} from "react-router-dom"
 
// export default function Protected({children,authentication=true})
// {

//     const navigate = useNavigate();
//     const [loader, setLoader] = useState(true)

//     const authStatus = useSelector(state=> state.auth.status)


//     useEffect(()=>{
//         //Todo write in easy way

//         //easy way
//         // if(authentication)
//         // {
//         //     if(!authStatus)// ifauth status is false
//         //     {
//         //         navigate("/login");
//         //     }
//         // }
//         // else
//         // {
//         //     if(authStatus)
//         //     {
//         //         navigate("/");
//         //     }
//         // }
//         if(authentication && authStatus!==authentication){
//             navigate("/login");

//         }else if(!authentication && authStatus!==authentication){
//             navigate("/")
//         }
//         setLoader(false)
//     },[authStatus,navigate,authentication])

//   return (

//     loader ? <h1>Loading...</h1> : <>{children}</>
//   )
// }





import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}