import RegisterForm from '@/components/auth/RegisterForm';
import registerImage from '../assets/login.jpg';

function Register() {
    return (
        <div className='flex  '>
            <div className='flex-none flex items-start justify-center w-[45%]'>
                <RegisterForm></RegisterForm>
            </div>
            <div className='flex-none flex items-center justify-center w-[55%] lg:h-[720px] xl:h-screen'>
                <img
                    src={registerImage}
                    alt='Product'
                    className='w-full h-full object-cover'
                ></img>
            </div>
        </div>
    );
}

export default Register;
