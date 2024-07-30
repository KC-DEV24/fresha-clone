import Image from 'next/image';
import React from 'react';

const CategoriesSec = ({ tag: Tag = 'h3', title }) => {
  return (
    <section className="default-sec categories-sec">
      <div className="container">
        <Tag className="main-title h1 text-center">{title}</Tag>
        <div className="categories-wrapper">
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="icon-wrapper"><Image src={'/img/icons/cat-medicine-icon.webp'} width={72} height={74} /></div>
            <span className="d-block text-center">Holistic Medicine</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="icon-wrapper"><Image src={'/img/icons/cat-massage-icon.webp'} width={83} height={72} /></div>
            <span className="d-block text-center">Massage & Wellness</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="icon-wrapper"><Image src={'/img/icons/cat-therapy-icon.webp'} width={77} height={72} /></div>
            <span className="d-block text-center">Therapy & Coaching</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="icon-wrapper"><Image src={'/img/icons/cat-hypnosis-icon.webp'} width={77} height={72} /></div>
            <span className="d-block text-center">NLP & Hypnosis</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="icon-wrapper"><Image src={'/img/icons/cat-fitness-icon.webp'} width={73} height={63} /></div>
            <span className="d-block text-center">Fitness & Recovery</span>
          </div>
        </div>
      </div>
      <div className="obj obj-3"></div>
    </section>
  )
}

export default CategoriesSec