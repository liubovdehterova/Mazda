import React from "react";
import {useStyleModal} from "./styles/styleModal";
import Cross from "../../images/cross-svgrepo-com.svg";
import {useDispatch} from "react-redux";
import {closeModal, setModalProductId} from "../../store/reducers";

function Modal({header, textInfo, actions}) {
    const classes = useStyleModal();
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(closeModal());
        dispatch(setModalProductId(null));
    };
    return (
        <div className={classes.modal} onClick={handleCloseModal} data-testid="modal-content">
            <div className={classes.modal__wrapper}>
                <header className={classes.modal__header}>
                    <h2 className={classes.modal__title}>
                        {header}
                    </h2>
                    <button data-testid="cross" className={classes.visible} type="button" onClick={handleCloseModal}>
                        <img src={Cross} alt="cross" className={classes.visible__img}/>
                    </button>
                </header>
                <p className={classes.modal__text}>
                    {textInfo}
                </p>
                <div className={classes.modal__button}>
                    {actions && actions.map((action, index) => (
                        <button type="button"
                                className={classes.modal__button__item}
                                key={index}
                                onClick={action.onClick}>
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal;