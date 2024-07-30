import RatingStars from '@/app/assets/RatingStars'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ variant, serviceType, serviceName, rating, reviewsCount, location }) => {
    return (
        <Link href={'/'} className={`card h-100 ${variant === 'primary' ? 'card-s1' : variant === 'secondary' ? 'card-s2' : 'card-s3'}`}>
            <div className="position-relative">
                <Image src={'/img/dummy-product-1.webp'} alt='service-image' width={329} height={251} loading='lazy' className='card-img' />
                <div className="card-badge fw-semibold text-gray fs-14">Sale 30% off</div>
            </div>
            <div className="card-body">
                <span className="d-block text-gray fw-semibold mb-1" style={{ fontSize: '16px', textTransform: 'capitalize' }}>{serviceType}</span>
                <span className="card-title d-block text-gray-2 fs-14 mb-1">{serviceName}</span>
                <div className="d-flex align-items-center mb-1" style={{ gap: '4px' }}>
                    <RatingStars />
                    <span className="d-block fs-14 text-gray">{rating} ({reviewsCount})</span>
                </div>
                <div className="d-flex align-items-center" style={{ gap: '4px' }}>
                    <Image src={'/img/icons/map-marker-stroke-icon.svg'} width={12} height={17} alt='map-marker-icon'/>
                    <span className="d-block fs-14 text-gray">{location}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card