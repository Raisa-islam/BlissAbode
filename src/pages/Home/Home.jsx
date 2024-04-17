import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderCard from '../../layouts/SliderCard';
import { useLoaderData } from 'react-router-dom';
import FeaturedProperties from '../../layouts/FeaturedProperties';


const Home = () => {

    const data = useLoaderData();
    //console.log(data.length, data)


    return (
        <div>
            <div className='flex flex-row justify-center items-center'>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <div>
                                {isActive ? (
                                    <div><SliderCard key={item.id} estate={item}></SliderCard></div>
                                ) : (
                                    <div>Not active</div>
                                )}

                            </div>
                        )}
                    </SwiperSlide>)}

                </Swiper>


            </div>

            <div className='container mx-auto mt-12'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-black'>Featured Properties</h1>
                    <p className='mt-6 text-lg md:text-xl lg:text-2xl font-medium text-[#03071299]'>Find Your Perfect Haven: Dive into Our Featured Properties!</p>
                </div>

                <div className='grid lg:grid-cols-2 gap-6 mt-12 p-4 lg:p-0'>

                    {
                        data.map((item) => <FeaturedProperties key={item.id} estate={item}></FeaturedProperties>)
                    }

                </div>
            </div>

        </div>

    );
};

export default Home;