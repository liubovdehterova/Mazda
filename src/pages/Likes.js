import React from 'react';
import {List, ListItem} from "@mui/material";
import ProductCard from "../components/Cards/ProductCard";
import {useSelector} from "react-redux";
import {useStyleCard} from "../components/Cards/style/styleCards";

const Likes = () => {
    const classes = useStyleCard();
    const favorite = useSelector(state => state.product.favorites);
    const products = useSelector(state => state.product.products);
    return (
        <div>
            <>
                <List className={classes.cards} sx={{width: '100%', bgcolor: 'background.paper', display: 'flex'}}>
                    {
                        favorite.length > 0 ? (
                            products
                                .filter((card) => favorite.includes(card.id))
                                .map((card) => (
                                    <ListItem key={card.id} className={classes.cardsItem} sx={{border: '1px solid #000000', width: '25%'}}>
                                        <ProductCard
                                            id={card.id}
                                            name={card.name}
                                            price={card.price}
                                            article={card.article}
                                            imgUrl={card.imgUrl}
                                            colors={card.colors}
                                        />
                                    </ListItem>
                                ))
                        ) : (
                            <p>У вас немає улюблених автомобілів</p>
                        )
                    }

                </List>
            </>
        </div>
    );
};

export default Likes;