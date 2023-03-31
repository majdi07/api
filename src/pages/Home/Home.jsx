import React from 'react'
import UserList from '../../component/userList/UserList';
import style from "./home.module.css"

const Home = ({ laoding, users }) => {
    // console.log(users);
    // console.log(laoding);
    return (
        <div className={style.home}>
            <UserList users={users} laoding={laoding} />
        </div>
    )
}

export default Home