import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";
import { MdOutlineGarage } from "react-icons/md";
import { WiSnowflakeCold } from "react-icons/wi";
import { FcConferenceCall } from "react-icons/fc";
import { LuFlame } from "react-icons/lu";
import { BiCctv } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import { Link } from 'react-router-dom';

const EstateDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    console.log("ekhane ", id);
    const idInt = parseInt(id)
    console.log("ekhane  int", idInt);
    console.log(data)
    const estate = data.find(item => item.id === idInt);
    console.log(estate);

    const { estate_title, image_link, location, beds, baths, area, features, price, status, description, segment_name } = estate;

    return (
        <div className='bg-slate-200'>
            <div className='container mx-auto pt-12 '>
                <div className='flex md:flex-row justify-between'>


                    <div>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <p className='font-bold text-lg'>{estate_title}</p>
                            <div className='rounded-xl bg-red-600 text-white font-semibold w-20 h-8 flex flex-row justify-center items-center'>For {status}</div>
                        </div>


                        <div className='flex flex-row gap-3 items-center mt-3 text-[#03071299] text-md md:text-lg'><IoLocationSharp />{location.address}</div>


                    </div>
                    <div>
                        <div className='text-red-600 font-semibold text-lg'>{price}</div>

                    </div>

                </div>

                <div className='shadow-xl p-4 bg-white mt-4'>
                    <div>
                        <p className='text-xl font-semibold text-red-500 mb-2'>Gallary</p>
                        <div className='h-[3px] w-12 bg-red-500 mb-4'></div>
                        <div className='flex justify-center'>
                        <img src={image_link} alt="" />
                        </div>
                        
                    </div>
                </div>

                <div className='shadow-xl p-4 bg-white mt-8'>
                    <div>
                        <p className='text-xl font-semibold text-red-500 mb-2'>Description</p>
                        <div className='h-[3px] w-12 bg-red-500 mb-4'></div>

                        <div>
                            {description}
                        </div>
                    </div>
                </div>

                <div className='shadow-xl p-4 bg-white mt-8'>
                    <div>
                        <p className='text-xl font-semibold text-red-500 mb-2'>Property Details</p>
                        <div className='h-[3px] w-12 bg-red-500 mb-4'></div>

                        <div className='text-[#030712] font-medium text-lg grid grid-cols-1 gap-2 md:grid-cols-2'>
                            <p className=''>Property Id : <span className='font-semibold'>{id}</span></p>
                            <p>Property Type : <span className='font-semibold'>{segment_name}</span></p>
                            <p>Property Status :  <span className='font-semibold'> For {status}</span></p>
                            <p>Property Price : <span className='font-semibold'>{price}</span></p>
                        </div>
                    </div>


                </div>

                <div className='shadow-xl p-4 bg-white mt-8'>
                    <div>
                        <p className='text-xl font-semibold text-red-500 mt-2'>Features</p>
                        <div className='h-[3px] w-12 bg-red-500 mb-4'></div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><TbRulerMeasure  className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'>Area </p><p className='text-[#030712] font-bold text-lg'>{area}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><IoBedOutline className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'>Bedrooms </p><p className='text-[#030712] font-bold text-lg'>{beds}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><LiaBathSolid className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Bathrooms </p><p className='text-[#030712] font-bold text-lg'>{baths}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><MdOutlineGarage className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Parking</p><p className='text-[#030712] font-bold text-lg'>{features.parking ? 'Yes' : 'No'}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><SiAdguard className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Security</p><p className='text-[#030712] font-bold text-lg'>{features.security ? 'Yes' : 'N/A'}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><BiCctv className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> CCTV</p><p className='text-[#030712] font-bold text-lg'>{features.cctv ? 'Yes' : 'No'}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><FcConferenceCall className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Conference Hall</p><p className='text-[#030712] font-bold text-lg'>{features.conference_hall ? 'Yes' : 'N/A'}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><LuFlame className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Central Heating</p><p className='text-[#030712] font-bold text-lg'>{features.heating ? 'Yes' : 'N/A'}</p></div> 
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><WiSnowflakeCold className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'> Central Cooling</p><p className='text-[#030712] font-bold text-lg'>{features.cooling ? 'Yes' : 'N/A'}</p></div> 
                            </div>

                           
                           
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EstateDetails;