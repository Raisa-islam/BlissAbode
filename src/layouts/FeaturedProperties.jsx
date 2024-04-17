import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";
import { MdOutlineGarage } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

const FeaturedProperties = ({ estate }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { id, estate_title, image_link, location, beds, baths, area, features, price, segment_name, status } = estate;

    return (
        <>

            <div className='flex flex-col border rounded-xl ' data-aos={id % 2 === 0 ? 'fade-left' : 'fade-right'}>
                <div className='rounded-l-xl relative'>
                    <img src={image_link} className="rounded-t-xl" alt="Movie" />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md font-semibold w-fit">For {status}</div>
                 </div>
                <div className='p-4 flex flex-col justify-center'>
                    <h2 className="text-lg font-medium text-[#030712]">{estate_title}</h2>
                    <div className='rounded-xl bg-green-100 text-blue-600 font-medium w-fit px-3 py-1'>
                        # {segment_name}

                    </div>
                    <div className='flex flex-row gap-3 items-center mt-3 text-[#03071299] text-md'><IoLocationSharp />{location.address}</div>
                    <div className='flex flex-row items-center justify-between mt-4 text-[#03071299]'> <div className='flex flex-row items-center gap-2'><IoBedOutline />{beds} Bedrooms</div>
                        <div className='flex flex-row items-center gap-2'><LiaBathSolid />{baths} Bathrooms</div>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-4 mb-5 text-[#03071299] md:text-md'>
                        <div className='flex flex-row items-center gap-2'><TbRulerMeasure />{area}</div>
                        <div className='flex flex-row items-center gap-2'><MdOutlineGarage />{features.parking ? 'Parking Yes' : 'No Parking'}</div>
                    </div>
                    <hr />
                    <div className='mt-5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0'>
                        <div className=' text-lg md:text-xl font-semibold'>{price}</div>
                        <div><FcLike className='text-2xl'/></div>
                        <Link to={`/view-details/${id}`}>
                        <div>
                            <button className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">

                                <p>View Details</p>

                            </button>
            
                        </div>
                        </Link>
                       
                    </div>

                </div>

                
            </div>

        </>
    );
};

export default FeaturedProperties;