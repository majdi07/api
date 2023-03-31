import Spinner from 'react-bootstrap/Spinner';
import UserCart from '../userCart/UserCart';
import style from "./userList.module.css"

const UserList = ({ laoding, users }) => {
    console.log(users);
    console.log(laoding);
    return (
        <div className={style.bloc}>
            {
                laoding ? (
                    <>
                        <span className="visually-hidden">Loading...</span>
                        <Spinner animation="border" variant="primary" />
                    </>
                ) : (
                    users.map((el) => <UserCart user={el} key={el.id} />)
                )
            }



        </div>
    )
}

export default UserList