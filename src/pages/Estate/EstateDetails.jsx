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
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FcLike } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const EstateDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    console.log("ekhane ", id);
    const idInt = parseInt(id)
    console.log("ekhane  int", idInt);
    console.log(data)
    const estate = data.find(item => item.id === idInt);
    console.log(estate);

    const { estate_title, image_link, location, beds, baths, area, features, price, status, description, segment_name, facilities } = estate;
    const position = [location.latitude, location.longitude];
    console.log(location.latitude, location.longitude)

    return (
        <div className='bg-slate-200 pb-12 overflow-hidden'>
            <Helmet>
                <title>Bliss Abode | Property Details ${id}</title>
            </Helmet>
            <div className='container mx-auto pt-12 max-w-[80%]'>
                <div className='flex flex-col md:flex-row justify-between'>


                    <div>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div>
                                <p className='font-bold text-lg lg:text-2xl'>{estate_title}</p>
                                <div><p className='font-semibold text-md lg:text-xl'>Category : <span className='font-bold'>{segment_name}</span></p></div>
                            </div>

                            <div className='rounded-xl bg-red-600 text-white font-semibold w-20 h-8 flex flex-row justify-center items-center'>For {status}</div>
                        </div>


                        <div className='flex flex-row gap-3 items-center mt-4 text-[#03071299] text-md lg:text-lg md:text-lg'><IoLocationSharp />{location.address}</div>


                    </div>
                    <div>
                        <div className='text-red-600 font-semibold text-lg lg:text-xl'>{price}</div>

                    </div>

                </div>
                <div className='mt-8 flex flex-row gap-4'>
                    <p className='text-xl font-semibold text-[#030712]'>Features: </p>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                        {facilities.map((item) => <div className='rounded-xl bg-green-100 text-blue-600 font-medium px-3 py-1'>
                            # {item}
                        </div>)}
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

                <div className='flex flex-col  lg:gap-4'>

                    <div className=''>
                        <div className='shadow-xl p-4 bg-white mt-8'>
                            <div>
                                <p className='text-xl font-semibold text-red-500 mb-2'>Property Details</p>
                                <div className='h-[3px] w-12 bg-red-500 mb-4'></div>

                                <div className='text-[#030712] font-medium text-lg grid grid-cols-1 gap-2'>
                                    <p className=''>Property Id : <span className='font-semibold'>{id}</span></p>
                                    <p>Property Type : <span className='font-semibold'>{segment_name}</span></p>
                                    <p>Property Status :  <span className='font-semibold'> For {status}</span></p>
                                    <p>Property Price : <span className='font-semibold'>{price}</span></p>
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

                    </div>
                    <div className='shadow-xl p-4 bg-white mt-8'>
                        <div>
                            <p className='text-xl font-semibold text-red-500 mt-2'>Location</p>
                            <div className='h-[3px] w-12 bg-red-500 mb-4'></div>
                        </div>
                        <div className="">
                            <MapContainer center={position} zoom={5} scrollWheelZoom={false} className="max-w-[600px] md:max-w-[900px] lg:max-w-[1600px] h-96 lg:h-[500px]">
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        {location.address}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                </div>







                <div className='shadow-xl p-4 bg-white mt-8'>
                    <div>
                        <p className='text-xl font-semibold text-red-500 mt-2'>Facilities</p>
                        <div className='h-[3px] w-12 bg-red-500 mb-4'></div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='flex flex-row items-center gap-4 mt-4 text-[#030712]'>
                                <span className='border p-2 rounded-full border-black'><TbRulerMeasure className='w-10 h-10 font-bold' /></span> <div> <p className=' text-black text-lg'>Area </p><p className='text-[#030712] font-bold text-lg'>{area}</p></div>
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