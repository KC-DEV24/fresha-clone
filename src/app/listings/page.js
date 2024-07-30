import React from 'react'
import { Card, Footer, Header } from '../components';
import { sliderObj } from '@/app/static/productListing';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="main">
        <section className="product-list-sec top-sec">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
              <h1 className="main-title font-gilroy-medium h2 text-center mb-0">Explore Services Near You</h1>
              <Link href={'/'} className='d-flex align-items-center gap-1 text-black'>
                <Image src={'/img/icons/filter-icon.svg'} width={17} height={17} alt='arrow-icon' />
                <span className='text-gray'>Filter By:</span> Location
              </Link>
            </div>
            <div className="row gx-1 gy-2">
              {
                sliderObj.map((item, i) => (
                  <div key={i} className="col-md-6 col-lg-4 col-xl-3">
                    <Card variant={"primary"} serviceName={item.serviceName} serviceType={item.serviceType} rating={item.rating} reviewsCount={item.reviewsCount} location={item.location} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="obj obj-1"></div>
          <div className="obj obj-2"></div>
          <div className="obj obj-3"></div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default page