import React,{Component} from 'react';
import { MdAlternateEmail  } from 'react-icons/md';
import { RiLockPasswordFill,RiPhoneFill  } from 'react-icons/ri';
import{FaUserAlt} from 'react-icons/fa';


const Login = () => {

    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                {/* imagen */}
                <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                </svg>
                
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16 align: center " >
                <p tabIndex={0} role="heading" aria-label="text forgot password" className="text-2xl font-extrabold leading-6 text-gray-800">
                ¿Te olvidaste tu contraseña?
                </p>
                <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        No te preocupes! Nos puede pasar a todos. Ingresa tu Mail y te ayudamos.
                       
                    </p>
    
                    <div className='mt-6 w-full'>
                
                        <lable className="text-sm font-medium leading-none text-gray-800 my-0.5 inline-flex"><MdAlternateEmail/>Email</lable>
                        <input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                
                    <div className="mt-6">
                        <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Enviar Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;