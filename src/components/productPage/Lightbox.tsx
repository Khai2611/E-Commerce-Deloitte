import React from 'react';

const Lightbox: React.FC = () => {
    return (
        <div className='lightbox absolute w-108 h-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl overflow-hidden bg-orange hidden'>
            {/* Lightbox images and navigation buttons */}
            <img
                src='./images/image-product-1.jpg'
                className='slideLightbox slide--1 w-full rounded-2xl'
                alt='product-1 image'
            />

            <img
                src='./images/image-product-2.jpg'
                className='slideLightbox slide--2 w-full rounded-2xl'
                alt='product-2 image'
            />

            <img
                src='./images/image-product-3.jpg'
                className='slideLightbox slide--3 w-full rounded-2xl'
                alt='product-3 image'
            />

            <img
                src='./images/image-product-4.jpg'
                className='slideLightbox slide--4 w-full rounded-2xl'
                alt='product-4 image'
            />

            <div className='w-full absolute top-1/2 flex justify-between'>
                <button className='btn__previous hover:bg-black hover:bg-opacity-20 p-4'>
                    <img src='./images/icon-previous.svg' alt='' />
                </button>
                <button className='btn__next hover:bg-black hover:bg-opacity-20 p-4'>
                    <img src='./images/icon-next.svg' alt='' />
                </button>
            </div>
        </div>
    );
};

export default Lightbox;
