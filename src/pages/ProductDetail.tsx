import Product from '@/components/productPage/Product';
import Lightbox from '@/components/productPage/Lightbox';

const ProductDetail = () => {
    return (
        <div className='font-primary min-h-screen overflow-x-hidden'>
            <Product></Product>
            <Lightbox></Lightbox>
        </div>
    );
};

export default ProductDetail;
