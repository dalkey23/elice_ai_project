import React, { PropsWithChildren } from "react";
import * as SC from './ModalSC'
import DaumPost from '../../Page/User/DaumPostCode'
interface Props {
    onClickToggleModal : ()=> void;
}

function Modal({onClickToggleModal, children}: PropsWithChildren<Props>){
    return (
        <SC.ModalContainer>
            <SC.DialogBox>
                {children}
                <DaumPost></DaumPost>
            </SC.DialogBox>
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