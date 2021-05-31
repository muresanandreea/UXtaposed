import React, {useState} from 'react';
import {Circle} from './ContactUsWidget.style';
import {ContactUsModal} from "../../ContactUs/ContactUsModal";


export const ContactUsWidget = () => {
    const [contactUsModal, setContactUsModal] = useState(false);

    console.log(contactUsModal,'click');
    return (
        <div >
            {contactUsModal &&
            <ContactUsModal  showModal={()=> setContactUsModal(!contactUsModal)}
                             closeModal={()=> setContactUsModal(false)}/>}
            <Circle onClick = {()=>setContactUsModal(true)}>
                <i className="fas fa-comment-dots"/>
            </Circle>
        </div>
    );
}