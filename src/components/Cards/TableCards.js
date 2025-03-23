import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Avatar, Link} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import MyButton from "../Button/MyButton";
import {useStyleCard} from "./style/styleCards";
import {useDispatch, useSelector} from "react-redux";
import {addCart, addFavorite, closeModal, openModal, setModalProductId} from "../../store/reducers";
import Modal from "../Modal/Modal";

const TableCards = ({id, name, price, imgUrl, article, colors}) => {
    const product = {
        id: id,
        name: name,
        price: price,
        imgUrl: imgUrl,
        article: article,
        colors: colors
    }
    const classes = useStyleCard();
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.product.isModalOpen);
    const modalProductId = useSelector((state) => state.product.modalProductId);
    const favorites = useSelector((state) => state.product.favorites) || [];
    const carts = useSelector((state) => state.product.cart) || [];
    const isFavorite = favorites.includes(id);
    const isInCart = carts.includes(id);

    const handleIsOpenModal = (id) => {
        dispatch(openModal());
        dispatch(setModalProductId(id));
    };
    const handleCloseModal = () => {
        dispatch(closeModal());
        dispatch(setModalProductId(null));
    };
    const handleIsFavorite = (id) => {
        dispatch(addFavorite({id}));
    };
    return (
        <>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table" className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell align="center" sx={{fontWeight: '700'}}>name</TableCell>
                            <TableCell align="center" sx={{fontWeight: '700'}}>image</TableCell>
                            <TableCell align="center" sx={{fontWeight: '700'}}>price</TableCell>
                            <TableCell align="center" sx={{fontWeight: '700'}}>article</TableCell>
                            <TableCell align="center" sx={{fontWeight: '700'}}>colors</TableCell>
                            <TableCell align="center" sx={{fontWeight: '700'}}>button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBody} sx={{backgroundColor: isInCart ? '#afafaf' : 'white',}}>
                        <TableRow
                            key={id}
                        >
                            <TableCell className={classes.tableBodyItem} align="center" width="150px">{name}</TableCell>
                            <TableCell className={classes.tableBodyItem} align="center">
                                <Avatar sx={{width: '170px', height: '100px', margin: '0 auto'}}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={imgUrl}
                                        alt="product"
                                    />
                                </Avatar>
                            </TableCell>
                            <TableCell className={classes.tableBodyItem} align="center">{price} грн</TableCell>
                            <TableCell className={classes.tableBodyItem} align="center">{article}</TableCell>
                            <TableCell className={classes.tableBodyItem} align="center">
                                {colors.map((color, index) => (
                                    <Link
                                        href="#"
                                        title={color}
                                        variant="solid"
                                        size="small"
                                        key={index}
                                        sx={{
                                            background: color,
                                            minWidth: "auto",
                                            width: "20px",
                                            height: "20px",
                                            display: "inline-block",
                                            marginRight: "5px",
                                            border: "1px solid #000000"
                                        }}
                                    />
                                ))}
                            </TableCell>
                            <TableCell className={classes.tableBodyItem} align="center">
                                <MyButton data-testid="favorite-button"
                                          size="small"
                                          style={{minWidth: "auto"}}
                                          onClick={() => handleIsFavorite(id)}
                                          label={isFavorite ?
                                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                   stroke="#000000"
                                                   className={classes.star} aria-label="Favorite">
                                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                     strokeLinejoin="round"></g>
                                                  <g id="SVGRepo_iconCarrier">
                                                      <path
                                                          d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                                          fill="#444444"></path>
                                                  </g>
                                              </svg>
                                              :
                                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                   stroke="#000000"
                                                   className={classes.star} aria-label="NonFavorite">
                                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                     strokeLinejoin="round"></g>
                                                  <g id="SVGRepo_iconCarrier">
                                                      <path
                                                          d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                                          fill="#ffffff"></path>
                                                  </g>
                                              </svg>
                                          }
                                />
                                <MyButton size="small"
                                          style={{
                                              lineHeight: "0.8rem",
                                              color: isInCart ? "white" : "red",
                                              backgroundColor: isInCart ? "green" : "black",
                                              padding: "10px 5px",
                                              border: isInCart ? '1px solid #000' : '1px solid #afafaf'
                                          }}
                                          onClick={() => handleIsOpenModal(id)}
                                          label="Add to cart"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {isModalOpen && modalProductId === id && (
                <Modal
                    header="Додавання в кошик"
                    textInfo="Додати товар в кошик?"
                    actions={[
                        {label: "Так", onClick: () => dispatch(addCart(product))},
                        {label: "Ні", onClick: handleCloseModal},
                    ]}
                />
            )}
        </>
    )
}
export default TableCards;