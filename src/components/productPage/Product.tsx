import React from 'react';
import ImageSlider from './ImageSlider';

const Product = () => {
    return (
        <div className='xl:max-w-128 lg:max-w-4xl md:gap-20 gap-4 md:max-w-3xl md:mx-auto md:mt-16 flex md:flex-row flex-col overflow-hidden md:px-12 pr-0'>
            <div className='md:w-1/2 w-full overflow-hidden relative'>
                <ImageSlider />

                <div className='thumbnails md:px-0 px-4 grid grid-cols-4 mt-8 justify-between gap-8'></div>
                {/* Thumbnails go here */}
            </div>
            <div className='md:w-1/2 w-full md:p-12 md:pr-0 px-4 md:px-0 flex flex-col justify-center'>
                <h1>SNEAKER COMPANY</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                {/* Price and add to cart button goes here */}

                <div className='mt-6 flex items-center gap-4'>
                    <h3 className='font-bold text-3xl'>$125.00</h3>
                    <h4 className='text-orange font-bold bg-paleOrange px-1.5 rounded'>
                        50%
                    </h4>
                </div>
                <h4 className='text-grayishBlue font-bold line-through mt-1'>
                    $250.00
                </h4>

                <div className='flex mt-6 md:gap-6 gap-2 flex-col md:flex-row'>
                    {/* <!--counter--> */}
                    <div className='bg-lightGrayishBlue flex md:w-2/5 w-full justify-between items-center py-3 px-4 rounded-xl'>
                        <button className=''>
                            <img
                                src='../../assets/images/icon-minus.svg'
                                className='btn__minus active:translate-y-0.5 duration-75 hover:opacity-60'
                                alt='minus icon'
                            />
                        </button>
                        <p className='item__amount--counter item__amount text-lg font-bold'>
                            0
                        </p>
                        <button className=''>
                            <img
                                src='../../assets/images/icon-plus.svg'
                                className='btn__plus active:translate-y-0.5 duration-75 hover:opacity-60'
                                alt='plus icon'
                            />
                        </button>
                    </div>
                    <button className='btn__addToCart flex gap-4 items-center justify-center md:w-3/5 w-full py-3 md:py-0 text-paleOrange bg-orange rounded-xl font-bold active:translate-y-0.5 duration-75 hover:bg-opacity-60 shadow-[0px_15px_48px_6px_#FFE2CC] md:mb-0 mb-8'>
                        {/* <ion-icon
                            className='text-xl font-bold'
                            name='cart-outline'
                        ></ion-icon> */}
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
