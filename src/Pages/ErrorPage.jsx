import React from 'react';
import error from '../Animation/Page404.json'
import Lottie from 'react-lottie-player';
const ErrorPage = () => {
    return (
        <div>
            <div className='min-h-[400px]'>
                <Lottie className='w-10/12 mx-auto' animationData={error} loop play>

                </Lottie>
            </div>
        </div>
    );
};

export default ErrorPage;