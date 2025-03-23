import React, {useEffect} from 'react';
import { List } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ProductCart from "../components/Cart/ProductCart";
import {fetchProducts, openForm} from "../store/reducers";
import Button from "@mui/material/Button";
import FormBuy from "../components/Form/FormBuy";

const Cart = () => {
    const cart = useSelector(state => state.product.cart);
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const isFormOpen = useSelector((state) => state.form.isFormOpen);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleIsOpenForm = () => {
        dispatch(openForm());
    };

    const calculateTotalPrice = () => {
        return products
            .filter((product) => cart.includes(product.id))
            .reduce((total, product) => {
                const quantity = cart.filter((itemId) => itemId === product.id).length;
                return total + quantity * +(product.price.replace(/\s/g, ''));
            }, 0);
    };

    const totalCartPrice = calculateTotalPrice();

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    cart && cart.length > 0 ? (
                        products
                            .filter((card) => cart.includes(card.id))
                            .map((card) => (
                                <ProductCart
                                    key={card.id}
                                    id={card.id}
                                    imgUrl={card.imgUrl}
                                    name={card.name}
                                    colors={card.colors}
                                    price={card.price}
                                    article={card.article}
                                    count={cart.filter((itemId) => itemId === card.id).length}
                                />
                            ))
                    ) : (
                        <p>Ваш кошик порожній</p>
                    )
                }
            </List>
            <p>Загальна сума: {totalCartPrice} грн</p>
            <Button variant="contained" disabled={cart.length <= 0} sx={{float: "right"}} onClick={handleIsOpenForm}>
                Оформити замовлення
            </Button>
            {isFormOpen && (
                <FormBuy />
            )}
        </>
    );
};

export default Cart;
