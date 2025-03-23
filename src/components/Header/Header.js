import React from "react";
import { useHeaderStyles } from "./styles/styleHeader";
import { Link } from 'react-router-dom';
import logoType from "../../images/logo.png";
import { useSelector } from "react-redux";


function Header() {
    const classes = useHeaderStyles();
    const countCart = useSelector(state => state.product.cart);
    const countFavorite = useSelector(state => state.product.favorites);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.headerWrap}>
                    <div className="logo">
                        <Link  to="/" className={classes.logoLink}>
                            <img src={logoType} alt="logo" width="70px"/>
                        </Link >
                    </div>
                    <div className={classes.basket}>
                        <Link to="/likes" className={classes.favorBTN}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
                                 className={classes.star}>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                        fill="#ffffff"></path>
                                </g>
                            </svg>
                            <span>
                                {countFavorite.length > 0 ? countFavorite.length : 0 }
                            </span>
                        </Link>
                        <Link to="/cart" className={classes.buttonCart}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                                 className={classes.cartSVG}>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                        stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <span>
                                {countCart.length > 0 ? countCart.length : 0 }
                            </span>
                            <span>
                                Cart
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
