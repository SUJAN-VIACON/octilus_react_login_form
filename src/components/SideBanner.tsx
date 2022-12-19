import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import jobBg from '../assets/images/job-bg.jpg';

const SideBanner = () => {
    return (
        <div className='relative text-white '>
            <img src={jobBg} alt="" className='w-full h-screen' />

            <div className='absolute z-[1] top-[20%] left-0 right-0 flex flex-col items-center justify-center'>
                <span className='space-y-10 px-20'>
                    <h1 className='text-6xl font-bold'>Let's Join with us !</h1>
                    <p className='text-2xl' style={{'lineHeight': '3rem'}}>Lorem ipsum dolor sit amet, consecut atque nihil pariatur libero Lorem ipsum dolor sit amet.</p>
                </span>
            </div>

            <div className='text-xl absolute z-[1] bottom-[10%] left-0 right-0 flex justify-between items-center px-10'>
                <p>Copyright © 2022 Octilus Technologies</p>
                <span className='flex space-x-5'>
                    <FaFacebookF/>
                    <AiOutlineTwitter/>
                    <FaLinkedinIn/>
                    <AiOutlineInstagram/>
                </span>
            </div>
        </div>
    )
}

export default SideBanner