import React from 'react'
import { Card, ListGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'
import style from "./user.module.css"

const UserCart = ({ user }) => {
    return (
        <div >
            <Link to={`/userDetails/${user.id}`} style={{ textDecoration: "none" }}>
                <Card className={style.card} style={{ height: "350px" }}>
                    <Card.Header> Name:{user.name + " " + user.username}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item> Email:{user.email}</ListGroup.Item>
                        <ListGroup.Item> phone:{user.phone}</ListGroup.Item>

                        <ListGroup.Item>City:{user.address.city}</ListGroup.Item>
                        <ListGroup.Item>WebSite:{user.website}</ListGroup.Item>
                        <ListGroup.Item>Company:{user.company.name}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Link>
        </div>
    )
}

export default UserCart