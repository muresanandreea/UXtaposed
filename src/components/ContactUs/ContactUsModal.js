import React,{useEffect, useState,useRef} from 'react';
import ContactUsForm from './ContactUsForm';
import {Backdrop, Modal, ModalContentWrapper,LogoWrapper, CloseButton} from './ContactUsModal.styles.js';
import {useOnClickOutside} from "../utils/clickOutside";

export const ContactUsModal = ({defaultOpened=false, showModal, closeModal}) => {
    const [isOpen, setIsOpen] = useState(defaultOpened);

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setIsOpen(false));
    const onAnimationEnd = () => {
        if (!showModal) {
            setIsOpen(false);
        }
    };

    useEffect( () => {
        if (showModal){
            setIsOpen(true);
        }
    }, [showModal]);

    return (
        <>
            {isOpen && (
                <Backdrop showBackdrop={showModal}>
                    <Modal ref={ref} showModal={showModal} onAnimatedEnd={onAnimationEnd}>
                        <ModalContentWrapper >
                            <ContactUsForm/>
                            <LogoWrapper/>
                            <div style={{height:'100%', display:'flex',alignItems:'flex-start', padding:'0 4px'}}>
                                <CloseButton onClick={closeModal}/>
                            </div>
                        </ModalContentWrapper>
                    </Modal>
                </Backdrop>
            )}
        </>)};

