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


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('estates.json');
            const jsonData = await response.json();
            setData(jsonData);

            console.log(data)
        };

        fetchData();
    }, []);

    return (
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
                {data.map(d => <SwiperSlide>
                    {({ isActive }) => (
                        // <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                        <SliderCard key={d.id} estate={d} active={isActive}></SliderCard>
                    )}  </SwiperSlide>)}

            </Swiper>

        </div>
    );
};

export default Home;