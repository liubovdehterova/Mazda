import {createUseStyles} from 'react-jss';

export const useStyleForm = createUseStyles({
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
    },
    formComponent: {
        width: "35%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.8)",
        padding: "10px"
    }
})
