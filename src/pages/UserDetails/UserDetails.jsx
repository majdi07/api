import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OneUser from '../../component/OneUser/OneUser'
import style from "./userDetails.css"

const UserDetails = () => {
    const { id } = useParams()
    const [userDetails, setUserDetail] = useState({})
    const [laodingDetails, setLaodingDetail] = useState(true)
    const getUserDetails = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            setLaodingDetail(false)
            setUserDetail(res.data)
        }).catch((err) => console.log("err"))
    }

    useEffect(() => {
        getUserDetails()
    })
    return (
        <div className={style.details}>
            <OneUser userDetails={userDetails} laodingDetails={laodingDetails} />



        </div>
    )
}

export default UserDetails