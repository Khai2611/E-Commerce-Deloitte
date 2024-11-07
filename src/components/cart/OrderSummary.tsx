import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import {Button} from '../ui/button';

function OrderSummary() {
    return (
        <Card className='w-11/12'>
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                    <div>Subtotal</div>
                    <div className='text-right'>RM25.00</div>
                    <div className='col-span-2'>
                        <hr></hr>
                    </div>

                    <div>Shipping</div>
                    <div className='text-right'>RM25.00</div>
                    <div className='col-span-2'>
                        <hr></hr>
                    </div>

                    <div>Card Content</div>
                    <div className='text-right'>RM25.00</div>
                    <div className='col-span-2'>
                        <hr></hr>
                    </div>

                    <div>Order Total</div>
                    <div className='text-right'>RM25.00</div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full'>Checkout</Button>
            </CardFooter>
        </Card>
    );
}

export default OrderSummary;
