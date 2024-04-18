import React, { useContext, useEffect, useState } from 'react';
import { getStoredAddProperty } from '../../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import FavFeatured from '../../layouts/FavFeatured';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet';

const Favorites = () => {
    const {user} = useContext(AuthContext);
    const [favProperty, setFavProperty] = useState([]);
    const estates = useLoaderData();
    useEffect(() => {
        console.log(user, user.email)
        const storedFProperty = getStoredAddProperty(user.email);
        console.log("estates from file:", estates);
        console.log("IDs from local storage:", storedFProperty);

        if (estates.length > 0) {
            const FavProperty = estates.filter(estate => storedFProperty.includes(estate.id));
            console.log("Favourite properties:", FavProperty);
            setFavProperty(FavProperty);

        }
    }, []);

    return (
        <div className='container mx-auto mt-12 max-w-[80%] overflow-hidden'>
            <Helmet>
                <title>Bliss Abode | Favorites</title>
            </Helmet>
        <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-black'>Dream Collection: Your Handpicked Hideaways</h1>
            <p className='mt-6 text-lg md:text-xl lg:text-2xl font-medium text-[#03071299]'>Discover Your Personal Paradise - All in One Place</p>
        </div>
            {!favProperty.length &&
            <div className='flex items-center justify-center mt-6 text-xl text-green-500 font-medium'> No Favorites items to show <HiOutlineEmojiSad /></div>}
        <div className='grid lg:grid-cols-2 gap-6 mt-12 p-4 lg:p-0'>

            {
                favProperty.map((item) => <FavFeatured key={item.id} estate={item}></FavFeatured>)
            }

        </div>
    </div>

    );
};

export default Favorites;