import React from 'react';
import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

const ImageSlider = () => {
    return (
        <div className='slider hover:cursor-pointer hover:opacity-80 duration-200 flex overflow-hidden'>
            <img className='slide slide--1' src={product1} alt='product-1' />
            <img className='slide slide--2' src={product2} alt='product-2' />
            <img className='slide slide--3' src={product3} alt='product-3' />
            <img className='slide slide--4' src={product4} alt='product-4' />
            {/* Additional images... */}
        </div>
    );
};

export default ImageSlider;
