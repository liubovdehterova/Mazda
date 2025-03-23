import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ size, onClick, style, label }) => {
    return (
        <Button
            size={size}
            sx={style}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default MyButton;