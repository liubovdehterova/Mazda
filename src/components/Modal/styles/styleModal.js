import {createUseStyles} from 'react-jss';

export const useStyleModal = createUseStyles({
    modal: {
        position: 'fixed',
        top: '0',
        left: '0',
        background: 'rgba(49,46,46,0.8)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        zIndex: '1'
    },
    modal__wrapper: {
        backgroundColor: '#2c2c2c',
        padding: '0 0 20px 0',
        width: '480px',
    },
    modal__header: {
        background: '#000',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    visible: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        padding: '0',
        border: 'none',
        background: 'none',
        cursor: "pointer"
    },
    hidden: {
        display: 'none',
        padding: '0',
    },
    visible__img: {
        width: '15px',
        height: '15px',
    },
    modal__title: {
        margin: '0',
    },
    modal__text: {
        padding: '10px 20px 0',
        margin: '0',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: '20px',
        letterSpacing: "2px",
    },
    modal__button: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0 0 0',
    },
    modal__button__item: {
        padding: '10px 10px',
        borderRadius: '5px',
        border: 'none',
        margin: '0 10px',
        background: 'red',
        color: '#ffffff',
        whiteSpace: "nowrap",
        cursor: "pointer"
    }
});