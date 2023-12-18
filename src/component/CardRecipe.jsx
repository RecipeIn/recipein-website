import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
import { TbStarFilled } from "react-icons/tb";

const CardRecipe = (props) => {
    const {image, category, name, creator, est, rating} = props;
    const [isLiked, setIsLiked] = useState(false);
    const likeButtonRef = useRef();
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
            <Link to="/detail"><img src={image} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
            <div className='ml-[268px] -mt-[176px] relative z-20'>
                <button
                ref={likeButtonRef}
                className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                    isLiked ? 'text-red-500' : 'text-font'
                }`}
                onClick={handleLikeClick}
                >
                {isLiked ? <AiFillHeart fontSize="24px" /> : <AiOutlineHeart fontSize='24px' />}
                </button>
            </div>
            <Link to="/detail">
            <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{category}</p>
            <p className='text-font text-[26px] font-bold ml-5'>{name}</p>
            <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {creator}</p></Link>
            <div className='inline-flex mt-[74px] ml-4'>
                <IoMdTime color='#AAAAAA' fontSize="24px" />
                <p className='text-[18px] font-light text-[#4D4D4D]'>{est} mnt</p>
                <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{rating}</p>
            </div>
            </Link>
        </div>
    )
}

export default CardRecipe