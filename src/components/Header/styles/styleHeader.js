import { createUseStyles } from 'react-jss';

export const useHeaderStyles = createUseStyles({
    container: {
        maxWidth: "1450px",
        margin: "0 auto"
    },
    headerWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonCart: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        border: "none",
        background: "red",
        padding: "10px 20px",
        color: "#ffffff"
    },
    cartSVG: {
        width: "24px",
        height: " 24px"
    },
    logoLink: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "#ff0000",
        fontSize: "24px"
    },
    header: {
        background: "#000000",
        marginBottom: "20px",
        padding: "10px 0"
    },
    basket: {
        display: "flex"
    },
    star: {
        width: "25px",
        height: "25px"
    },
    favorBTN: {
        display: "flex",
        alignItems: "center",
        background: "none",
        border: "none",
        color: "#ffffff",
        marginRight: "15px"
    }
});