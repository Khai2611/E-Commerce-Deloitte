import {
    CardNoBorder,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/cardNoborder';
import p1 from '../../assets/p1.jpg';
import {Button} from '../ui/button';
import {Input} from '../ui/input';
import {FaMinus, FaPlus} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const products = [
    {
        id: 1,
        name: 'Product 1',
        category: 'Category 1',
        price: 'RM230',
        image: p1,
        quantity: 12,
    },
    {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        price: 'RM150',
        image: p1, // Replace with the correct image
        quantity: 8,
    },
    // Add more products as needed
];

function ProductList() {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <CardNoBorder>
                        <CardHeader></CardHeader>
                        <CardContent>
                            <div className='grid grid-cols-4 gap-4'>
                                <img
                                    src={p1}
                                    alt='Product'
                                    className='size-44 md:size-36 sm:size-28 object-cover'
                                />

                                <div>
                                    <p>{product.name}</p>
                                    <p>{product.category}</p>
                                    <p>{product.price}</p>
                                    asdasdasd
                                </div>
                                <div className='flex justify-center space-x-0'>
                                    <Button>
                                        <FaMinus></FaMinus>
                                    </Button>
                                    <Input
                                        className='w-10 text-center'
                                        value={product.quantity}
                                        readOnly
                                    ></Input>
                                    <Button>
                                        <FaPlus></FaPlus>
                                    </Button>
                                </div>
                                <div className='flex justify-self-end'>
                                    <Button>
                                        <AiOutlineClose></AiOutlineClose>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                        {/* <CardFooter></CardFooter> */}
                    </CardNoBorder>
                    <hr className='my-4 border-gray-300'></hr>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
