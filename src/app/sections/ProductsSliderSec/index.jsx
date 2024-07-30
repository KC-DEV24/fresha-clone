"use client"
import { Card, SliderComp } from '@/app/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import "@/app/styles/scss/components/_slider.scss"
import { sliderObj } from '@/app/static/productListing';


const ProductSliderSec = ({ tag: Tag = 'h3', title, cardVarient, classes = '' }) => {
    
    return (
        <section className={`default-sec product-slider-sec ${classes}`}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <Tag className="main-title font-gilroy-medium h2 text-center mb-0">{title}</Tag>
                    <div className="d-flex align-items-center gap-1">
                        <Link href={'/'} className='text-gray'>Show all (100+)</Link>
                        <Image src={'/img/icons/stroke-arrow-right.svg'} width={17} height={11} alt='arrow-icon' />
                    </div>
                </div>
                <div className="slider-wrapper">
                    <SliderComp
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            768: {
                                centeredSlides: false
                            },
                        }}
                    >
                        {
                            sliderObj.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <Card variant={cardVarient} serviceName={item.serviceName} serviceType={item.serviceType} rating={item.rating} reviewsCount={item.reviewsCount} location={item.location} />
                                </SwiperSlide>
                            ))
                        }
                    </SliderComp>
                </div>
            </div>
            <div className="obj obj-1"></div>
            <div className="obj obj-2"></div>
        </section>
    )
}

export default ProductSliderSec;