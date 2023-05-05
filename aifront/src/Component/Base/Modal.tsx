import React, { PropsWithChildren } from "react";
import * as SC from './ModalSC'

interface ModalDefaultType {
    onClickToggleModal : ()=> void;
}

function Modal({onClickToggleModal, children}: PropsWithChildren<ModalDefaultType>){
    return (
        <SC.ModalContainer>
            <SC.DialogBox>{children}</SC.DialogBox>
            <SC.Backdrop onClick={(e: React.MouseEvent)=>{
                e.preventDefault()
                if(onClickToggleModal){
                    onClickToggleModal();
                }
            }}/>
        </SC.ModalContainer>
    )
}

export default Modal;