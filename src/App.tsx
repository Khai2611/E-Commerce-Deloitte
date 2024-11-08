import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import AddToCart from './pages/AddToCart';
import CheckoutForm from './pages/CheckoutForm';
import ProductList from './components/orderHistory/ProductList';
import Dropdown from './components/orderHistory/Dropdown';
import Title from './components/orderHistory/Title';

// khai
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import Home from './pages/Home';
import ProductDeets from './pages/ProductDeets';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AddToCart />,
        children: [],
    },
    {
        path: '/Checkout',
        element: <CheckoutForm />,
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/Register',
        element: <Register />,
    },
    {
        path: '/History',
        element: <ProductList />,
    },
    {
        path: '/Dropdown',
        element: <Dropdown />,
    },
    {
        path: '/Title',
        element: <Title />,
    },
    // khai
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/shop',
        element: <Shop />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/products/:id',
        element: <ProductDeets />,
    },
]);
const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='app'>
                <ToastContainer />
                <RouterProvider router={router} />
            </div>
            <Footer />
        </>
    );
};

export default App;
