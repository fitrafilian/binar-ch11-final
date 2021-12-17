import React, { useState } from 'react';
import Cookies from "js-cookie";
import jwt from "jwt-decode";
// import { 
//     Button,
//     Form,
// } from 'react-bootstrap';
import profpic from "../../assets/images/default_profile.png"
import "./user_profile.css"

function UserProfile() {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        bio: "",
        userdata: jwt(Cookies.get("AuthToken")),
        userscore: null,
        // userdata: null,
      });

    return (
        <div className="user-profile">
            <form>
                <div id="form-row-1">
                    <div className="profile-picture">
                        {/* <img src="https://colorlib.com/etc/bwiz/colorlib-wizard-6/images/avartar.png" alt="" /> */}
                        <img src={profpic} className="rounded-circle float-start" alt="..." />
                    </div>
                    <div id="form-col-2">
                        <div className="mb-3 form-row1-input">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First name :</label>
                            <input type="text" defaultValue={userData.userdata.firstName}  className="form-control text-dark form-input-1" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3 form-row1-input">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last name :</label>
                            <input type="text" defaultValue={userData.userdata.lastName} onChange="" className="form-control text-dark form-input-1" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address :</label>
                    <input type="email" defaultValue={userData.userdata.email} onChange="" className="form-control text-dark form-input-2" id="exampleFormControlInput1" placeholder="name@example.com" disabled="disabled" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone :</label>
                    <input type="number" defaultValue={userData.userdata.phone} onChange="" className="form-control text-dark form-input-2" id="exampleFormControlInput1" placeholder="08xxxxxxxxx" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio :</label>
                    <textarea defaultValue={userData.userdata.bio}  onChange="" className="form-control text-dark form-bio" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" href="/profile" className="btn btn-primary">Edit</button>
            </form>
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit
                </Button>
            </Form> */}
        </div>
    )
}

export default UserProfile
