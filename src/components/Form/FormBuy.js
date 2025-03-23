import React from 'react';
import {Formik} from 'formik';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {useStyleForm} from "./styles/stylesForm";
import Button from "@mui/material/Button";
import {buyTrue} from "./buyTrue";
import {useDispatch, useSelector} from "react-redux";
import {closeForm, removeProduct, submitFormTrue} from "../../store/reducers";
import { PatternFormat } from 'react-number-format';

const initialValues = {
    name: "",
    surname: "",
    age: "",
    address: "",
    phone: "",
};

const FormBuy = () => {
    const classes = useStyleForm();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.product.cart);
    const products = useSelector(state => state.product.products);

    const handleIsSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            await buyTrue.validateSync(formObject, {abortEarly: false}); //Влідація полів перед відправкою

            await dispatch(submitFormTrue()); //Відправка

            const purchasedProductsMap = cart.reduce((acc, productId) => {
                const product = products.find((p) => p.id === productId);
                if (product) {
                    if (acc[productId]) {
                        acc[productId].count += 1;
                        acc[productId].totalPrice += +(product.price.replace(/\s/g, '')); // Додаємо ціну товару до загальної суми
                    } else {
                        acc[productId] = {
                            id: product.id,
                            name: product.name, // Назва товара
                            totalPrice: +(product.price.replace(/\s/g, '')), // Початкова ціна товару
                            count: 1, // Кількість однакових товарів
                        };
                    }
                }
                return acc;
            }, {}); //Додавання і підрахунок товарів

            const purchasedProducts = Object.values(purchasedProductsMap); //Придбані товари

            console.log("Інформація з форми:", formObject); //Інформація з форми
            console.log("Придбані товари:", purchasedProducts); //Інформація про придбані товари

            cart.forEach((productId) => {
                dispatch(removeProduct({id: productId}));
            });


        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleIsCloseForm = () => {
        dispatch(closeForm());
    };
    const handleFormClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={classes.formWrapper} onClick={handleIsCloseForm}>
            <Formik initialValues={initialValues} validationSchema={buyTrue}>
                {({errors, touched, handleChange, handleBlur}) => (
                    <Box component="form"
                         sx={{
                             '& .MuiTextField-root': {m: 1, width: '98%'},
                         }}
                         onClick={handleFormClick}
                         className={classes.formComponent}
                         onSubmit={handleIsSubmitForm}
                    >
                        <TextField
                            required
                            id="name"
                            name="name"
                            type="text"
                            label="Ім'я"
                            placeholder="Введіть ваше ім'я"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <TextField
                            required
                            id="surname"
                            name="surname"
                            type="text"
                            label="Прізвище"
                            placeholder="Введіть ваше прізвище"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname && errors.surname}
                        />

                        <TextField
                            required
                            id="age"
                            name="age"
                            type="number"
                            label="Вік"
                            placeholder="Введіть ваш вік"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.age && Boolean(errors.age)}
                            helperText={touched.age && errors.age}
                        />

                        <TextField
                            required
                            id="address"
                            name="address"
                            type="text"
                            label="Адреса доставки"
                            placeholder="Адреса доставки: місто, вул. буд."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.address && Boolean(errors.address)}
                            helperText={touched.address && errors.address}
                        />

                        <PatternFormat
                            format="+38(###)###-##-##"
                            mask="_"
                            placeholder="+38(123)456-78-90"
                            required
                            id="phone"
                            name="phone"
                            type="text"
                            label="Мобільний телефон"
                            customInput={TextField}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.phone && Boolean(errors.phone)}
                            helperText={touched.phone && errors.phone}
                        />
                        <Button variant="contained" color="success" type="submit">Відправити</Button>
                    </Box>
                )}
            </Formik>
        </div>
    );
}

export default FormBuy;