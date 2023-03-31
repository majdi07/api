import React from 'react'
import { Card, ListGroup, Spinner } from "react-bootstrap"
import style from "./oneuser.module.css"
const OneUser = ({ laodingDetails, userDetails }) => {
    console.log(" userdetails", userDetails)
    return (
        <div className={style.oneUser}>
            {
                laodingDetails ? (
                    <>
                        <h1>.....laoding</h1>
                        <Spinner animation="border" variant="primary" />
                    </>
                ) : (
                    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
                        <Card >
                            <Card.Header> Name:{userDetails.name + " " + userDetails.username}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item> Email:{userDetails.email}</ListGroup.Item>
                                <ListGroup.Item> phone:{userDetails.phone}</ListGroup.Item>
                                <ListGroup.Item>website:{userDetails.website}</ListGroup.Item>
                                <ListGroup.Item>Street:{userDetails.address.street}</ListGroup.Item>
                                <ListGroup.Item>City:{userDetails.address.city}</ListGroup.Item>
                                <ListGroup.Item>Zipcode:{userDetails.address.zipcode}</ListGroup.Item>
                                <ListGroup.Item>  Company-Name:{userDetails.company.name}</ListGroup.Item>
                                <ListGroup.Item>  Company-CatchPhrase:{userDetails.company.catchPhrase}</ListGroup.Item>
                                <ListGroup.Item>  Company-Bs:{userDetails.company.bs}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                )
            }






        </div>
    )
}

export default OneUser