import React, {useEffect} from "react";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/reducers";
import {useViewMode} from "../Context/ViewModeContext";
import {useStyleCard} from "./style/styleCards";
import TableCards from "./TableCards";


function ListCards() {
    const classes = useStyleCard();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const {viewMode} = useViewMode();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            {viewMode === 'cards' ? (
                <div className={classes.cards}>
                    {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        article={product.article}
                        imgUrl={product.imgUrl}
                        colors={product.colors}
                    />
                    ))}
                </div>
            ) : (
                products.map(product => (
                    <TableCards
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        article={product.article}
                        imgUrl={product.imgUrl}
                        colors={product.colors}
                    />
                ))
            )}
        </>
    );
}

export default ListCards;
