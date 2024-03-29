import { Link } from "react-router-dom";
import leftimg from "../../../assets/banner/me.jpg"
import baner from "../../../assets/post/Beach.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Left = () => {
    return (
        <div>
            <div className="p-4 shadow-black/25 shadow-sm rounded-md border">
                <img className="rounded-md" src={leftimg} alt="" />
                <h1>About Me</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit beatae pariatur. quibusdam quia! Omnis reprehenderit deleniti nulla nihil eveniet?</p>
                <button className="p-3 bg-blue-600 rounded-md block mx-auto my-4 text-white">Read more</button>
            </div>



            <div className="mt-10 shadow-black/35 shadow-sm rounded-md p-4 border">
                <h1 className="text-center mb-8 text-xl font-semibold">Categories</h1>
                <div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Mountains</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Travelin Videos</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Guides for traveler.</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Beauty of Seas</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-2 p-2 rounded-md hover:shadow-blue-400 hover:shadow-md duration-300 cursor-pointer">
                        <h1>Others</h1>
                        <p>(22)</p>
                    </div>
                </div>
            </div>

            <div className="shadow-black/25 border p-4 rounded-md shadow-sm mt-10">
                <Link to="/popularPost">
                    <p className="text-2xl font-bold text-center cursor-pointer hover:text-blue-400 duration-300">Popular Post</p>
                </Link>
            </div>

            <div className="mt-10 rounded-md">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:w-[400px] rounded-md p-2">
                    <SwiperSlide>
                        <div className="rounded-md">
                            <img className="rounded-md relative w-[400px]" src={baner} alt="" />
                            <div className="absolute top-[20px] left-[30px] text-white -mt-[20px] -ml-[30px] md:w-[400px] w-full h-full md:h-[400px] backdrop-brightness-50">
                                <h1 className="ml-[65px] mt-8">September 17, 2018 - Tips & Tricks</h1>
                                <p className="text-2xl -md:ml-[90px] text-center mt-16 font-bold">Finding Love & home in <br /> Tbilisi Georgia</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-md">
                            <img className="rounded-md relative w-[400px]" src={baner} alt="" />
                            <div className="absolute top-[20px] left-[30px] text-white -mt-[20px] -ml-[30px] md:w-[400px] w-full h-full backdrop-brightness-50">
                                <h1 className="ml-[65px] mt-8">September 17 2018 - Tips & Tricks.</h1>
                                <p className="text-2xl -md:ml-[90px] text-center mt-16 font-bold">Finding Love & home in <br /> Tbilisi, Georgia</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Left;