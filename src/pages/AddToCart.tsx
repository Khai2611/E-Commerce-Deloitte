import ProductList from '@/components/cart/ProductList';
import OrderSummary from '@/components/cart/OrderSummary';
import Example from '@/components/cart/Slider';

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const AddToCart: React.FC = () => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setVisible(!isVisible);
    };

    return (
        <div className='grid grid-cols-3 gap-4'>
            HOMEPAGE
            <button
                className='col-span-3 bg-blue-500 text-white p-2 rounded'
                onClick={() => setVisible(true)}
            >
                Open Shopping Cart
            </button>
            <Example open={isVisible} setOpen={setVisible} />
            <button
                className='col-span-3 bg-blue-500 text-white p-2 rounded w-full'
                onClick={() => navigate('/login')}
            >
                Login
            </button>
            <button
                className='col-span-3 bg-blue-500 text-white p-2 rounded'
                onClick={() => navigate('/History')}
            >
                Order History
            </button>
            <button
                className='col-span-3 bg-blue-500 text-white p-2 rounded'
                onClick={() => navigate('/Dropdown')}
            >
                Dropdown History
            </button>
        </div>
    );
};

export default AddToCart;
