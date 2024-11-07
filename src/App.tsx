import Login from './pages/Login';
import Register from './pages/Register';
import AddToCart from './pages/AddToCart';
import CheckoutForm from './pages/CheckoutForm';
import ProductList from './components/orderHistory/ProductList';
import Dropdown from './components/orderHistory/Dropdown';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Title from './components/orderHistory/Title';

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
]);
function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
