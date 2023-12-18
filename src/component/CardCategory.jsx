import { Link } from 'react-router-dom';

const CardCategory = (props) => {
    const {name, image} = props;
    return (
        <div className='flex flex-col text-center'>
            <Link to="/pcategory">
            <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl flex justify-center p-6'>
                <img src={image}/>
            </div>
            <div>
                <p className='text-[20px] font-medium text-font mt-6'>{name}</p>
            </div>
            </Link>
        </div>
    )
}

export default CardCategory