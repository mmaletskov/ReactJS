import { useState } from "react";
import Modal from 'react-modal';
import CreatePage from "../CreatePage/CreatePage";

export default function ModalWindow(){

    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <>
            <button className="action__price-btn" onClick={showModal}>Заказать</button>
            <Modal isOpen={modalIsOpen}>
                <div>
                    <CreatePage setModalIsOpen={setModalIsOpen}/>
                    <button onClick={closeModal}>Закрыть</button>
                </div>
            </Modal>
        </>
    )

}