import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropright } from "react-icons/io";
import 'animate.css';
import { Link } from 'react-router-dom';

const SliderCard = ({ estate }) => {

    const { id,
        estate_title,
        segment_name,
        price,
        area,
        beds,
        baths,
        image_link } = estate;
    return (
        <>
            <div className="relative">
                <img src={image_link} className="w-full h-[400px] md:h-[600px]" alt="Your Image" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent flex flex-col justify-center">
                    <div className='text-white p-10 lg:p-14 lg:ml-8'>
                        <div className='flex flex-col gap-2 animate__animated animate__backInLeft'>
                            <p className='text-2xl md:text-4xl font-semibold'>{estate_title}</p>
                            <p className='text-lg font-medium'>{beds} Beds - {baths} Baths - {area}</p>
                        </div>
                        <div className='mt-6'> <p className='text-xl md:text-3xl font-bold animate__animated animate__fadeInLeft animate__delay-1s'>{price}</p></div>

                        <div className='animate__animated animate__fadeInLeft  animate__delay-2s'>
                            <Link to={`/view-details/${id}`}>
                                <button className="mt-6 bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold animate__animated animate__swing animate__delay-5s">
                                    <div className='flex flex-row gap-2 justify-center items-center '>
                                        <IoIosArrowDropright />
                                        <p>View Details</p>
                                    </div>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

SliderCard.propTypes = {
    estate: PropTypes.object.isRequired,
};

export default SliderCard;