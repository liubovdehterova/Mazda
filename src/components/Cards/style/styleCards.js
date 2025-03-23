import {createUseStyles} from "react-jss";

export const useStyleCard = createUseStyles({
    container: {
        maxWidth: "1450px",
        margin: "0 auto"
    },
    cardText: {
        overflow: 'hidden',
        display: '-webkit-box',
        "-webkitBoxOrient": 'vertical',
        "-webkitLineClamp": '2',
    },
    cards: {
        display: 'grid !important',
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gap: "20px",
        '@media (max-width: 1200px)': {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
        },
        '@media (max-width: 825px)': {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        '@media (max-width: 670px)': {
            gridTemplateColumns: "1fr 1fr",
        },
        '@media (max-width: 450px)': {
            gridTemplateColumns: "1fr",
        },
    },
    cardsItem: {
        width: "auto !important"
    },
    star: {
        width: "25px",
        height: "25px"
    },
    btnBlock: {
        display: "flex",
        alignItems: "center"
    },
    table: {
        overflowX: "auto",
        '@media (max-width: 825px)': {
            minWidth: '320px'
        }
    },
    tableHeader: {
        '@media (max-width: 825px)': {
            display: "none !important"
        }
    },
    tableBody: {
        '@media (max-width: 825px)': {
            border: "1px solid #000"
        },
        boxSizing: "border-box"
    },
    tableBodyItem: {
        boxSizing: "border-box",
        '@media (max-width: 825px)': {
            display: "block !important",
            width: "100% !important",
            boxSizing: "border-box",
            '&:first-child': {
                fontWeight: "700"
            },
            '&:nth-child(2)': {
                height: "150px",
                verticalAlign: "middle !important",
            }
        }
    }
});