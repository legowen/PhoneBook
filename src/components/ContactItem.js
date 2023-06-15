import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
        <Row>
            <Col lg="2">
                <img 
                    className="profile"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png"
                />
            </Col>
            <Col lg = "10">
                <div>
                    {item.name}
                </div>
                <div>
                    {item.phoneNumber}
                </div>
            </Col>
        </Row>
    </div>
  );
};

export default ContactItem