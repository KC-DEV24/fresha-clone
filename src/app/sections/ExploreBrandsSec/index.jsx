import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreBrandsSec = ({ tag: Tag = 'h3', title }) => {
  return (
    <section className="default-sec cta-sec cta-s1 p-0">
      <div className="container">
        <div className="cta-wrapper">
          <div className="content-wrapper" style={{maxWidth: '524px'}}>
            <Tag className="main-title h1 font-gilroy-medium mb-2">{title}</Tag>
            <p className="lead mb-3">Discover a world of Spa, wellness and beauty services.</p>
            <Link href={'/'} className='btn btn-dark d-block' style={{maxWidth: 'fit-content'}}>Explore Popular Brands</Link>
          </div>
        </div>

      </div>
      <div className="obj obj-1"></div>
    </section>
  )
}

export default ExploreBrandsSec