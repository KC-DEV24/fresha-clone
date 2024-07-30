import Link from 'next/link';
import React from 'react';

const CountriesSec = ({ tag: Tag = 'h3', title }) => {
  return (
    <section className="default-sec countries-sec">
      <div className="container">
        <Tag className="main-title h1 text-center">{title}</Tag>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <span className="menu-title d-block mb-3">East Cost</span>
            <ul className="menu">
              <li><Link href={'/'}>Services</Link></li>
              <li><Link href={'/'}>Products</Link></li>
              <li><Link href={'/'}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountriesSec