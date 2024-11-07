import loginImage from '../assets/login.jpg';
import LoginForm from '@/components/auth/LoginForm';

function Login() {
    return (
        <div className='flex  '>
            <div className='flex-none flex items-start justify-center w-[45%]'>
                <LoginForm></LoginForm>
            </div>
            <div className='flex-none flex items-center justify-center w-[55%] lg:h-[720px] xl:h-screen'>
                <img
                    src={loginImage}
                    alt='Product'
                    className='w-full h-full object-cover'
                ></img>
            </div>
        </div>
    );
}

export default Login;
