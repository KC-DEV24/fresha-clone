import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListBrandSec = ({ tag: Tag = 'h3', title }) => {
  return (
    <section className="default-sec cta-sec cta-s2 p-0">
      <div className="container">
        <div className="cta-wrapper">
          <div className="content-wrapper mx-auto text-center" style={{maxWidth: '560px'}}>
            <Tag className="main-title h1 font-gilroy-medium mb-2">{title}</Tag>
            <p className="lead mb-3">Discover a world of Spa, wellness and beauty services.</p>
            <Link href={'/'} className='btn btn-dark d-block mx-auto' style={{maxWidth: 'fit-content'}}>Explore Popular Brands</Link>
          </div>
        </div>

      </div>
      <div className="obj obj-1"></div>
      <div className="obj obj-2"></div>
    </section>
  )
}

export default ListBrandSec