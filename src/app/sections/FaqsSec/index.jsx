import React from 'react';
import { Accordion } from '@/app/components';

const FaqsSec = ({ tag: Tag = 'h3', title}) => {
    const faqs = [
        {
            question: "How do I find a spa service near me?",
            answer: "React is a JavaScript library for building user interfaces.React is a favorite among developers because it is simple and easy to learn.",
            open: true
        },
        {
            question: "Why use React?",
            answer: "React is a favorite among developers because it is simple and easy to learn.",
            open: false
        },
        {
            question: "How do you use React?",
            answer: "You use React by creating components.",
            open: false
        }
    ];
    return (
        <section className="default-sec faqs-sec pb-0">
            <div className="container">
                <Tag className="main-title h1 text-center">{title}</Tag>
                <div className="accordions-wrapper mx-auto" style={{ maxWidth: '636px' }}>
                    <Accordion faqs={faqs} />
                </div>
            </div>
            <div className="obj obj-1"></div>
        </section>
    )
}

export default FaqsSec;