import p1 from '../../assets/p1.jpg';
import {Button} from '../ui/button';

function ProductList() {
    const products = [
        {
            id: 1,
            name: 'Product 1 adsadas sadasdasd sadsadwa sdasdwad',
            category: 'Category 1',
            price: 'RM230',
            image: p1,
            quantity: 12,
            orderId: 'abc123',
            date: 'Oct 20, 2024',
        },
        {
            id: 2,
            name: 'Product 2',
            category: 'Category 2',
            price: 'RM150',
            image: p1, // Replace with the correct image
            quantity: 8,
            orderId: 'abc123',
            date: 'Oct 20, 2024',
        },
        {
            id: 3,
            name: 'Product 3',
            category: 'Category 3',
            price: 'RM150',
            image: p1, // Replace with the correct image
            quantity: 82,
            orderId: 'abc234',
            date: 'Oct 20, 2024',
        },
        // Add more products as needed
    ];

    return (
        <div className='space-y-4 p-4 divide-y divide-gray-300 '>
            {products.map((product) => (
                <div key={product.id} className='flex items-start p-4'>
                    <img
                        src={p1}
                        alt='Product'
                        className='w-24 h-24 object-cover mr-4'
                    />

                    <div className='flex-grow text-left'>
                        <h2 className='text-lg font-semibold'>
                            {product.name}
                        </h2>
                        <div className='mt-6'>
                            <p className='text-gray-500'>
                                Variation: {product.category}
                            </p>
                            <p className='text-gray-500'>
                                Quantity: {product.quantity}
                            </p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <p className='text-lg font-semibold'>{product.price}</p>
                        <Button className='mt-8'>Buy Again</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
