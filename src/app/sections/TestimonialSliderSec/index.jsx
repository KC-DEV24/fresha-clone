"use client"
import { Card, SliderComp } from '@/app/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import "@/app/styles/scss/components/_testimonial-slider.scss"


const TestimonialSliderSec = ({ tag: Tag = 'h3', title, cardVarient, classes = '' }) => {
    const sliderObj = [
        {
            id: 1,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 2,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 3,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 4,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 5,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 6,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        },
        {
            id: 7,
            subjectTitle: "The best booking system",
            reviewText: "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
            authorName: "Daniel Mark",
            authorImageUrl: "client-testi-1.webp",
        }

    ]
    return (
        <section className={`default-sec testimonial-slider-sec ${classes}`}>
            <div className="container">
                <Tag className="main-title font-gilroy-medium h1 text-center">{title}</Tag>
            </div>
                <div className="slider-wrapper">
                    <SliderComp
                        
                    >
                        {
                            sliderObj.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-item">
                                        <span className="testimonil-subject-title d-block font-coolvetica mb-1">{item.subjectTitle}</span>
                                        <p className="lead">{item.reviewText}</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <Image src={`/img/avatar/${item.authorImageUrl}`} width={39} height={39} alt='client-image' loading='lazy' className='rounded' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </SliderComp>
                </div>
            <div className="obj obj-2"></div>
        </section>
    )
}

export default TestimonialSliderSec;