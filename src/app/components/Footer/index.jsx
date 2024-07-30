import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 gx-lg-5">
            <div className="col-xs-6 col-md-4 col-xl-3">
              <Image src={'/img/logo.svg'} width={92} height={21} alt='logo-img' loading='lazy' className='mb-4' />
              <span className="d-block mb-3">Follow us on</span>
              <div className="d-flex gap-2 align-items-center">
                <Link href={'/'}>
                  <Image src={'/img/icons/facebook.svg'} width={12} height={20} alt='logo-img' loading='lazy' />
                </Link>
                <Link href={'/'}>
                  <Image src={'/img/icons/instagram.svg'} width={20} height={20} alt='logo-img' loading='lazy' />
                </Link>
                <Link href={'/'}>
                  <Image src={'/img/icons/twitter.svg'} width={20} height={20} alt='logo-img' loading='lazy' />
                </Link>
              </div>
            </div>
            <div className="col-xs-6 col-md-4 col-xl-2">
              <span className="d-block mb-2 font-coolvetica" style={{ fontSize: '24px' }}>About Company</span>
              <ul className="menu">
                <li><Link href={'/'}>Services</Link></li>
                <li><Link href={'/'}>Products</Link></li>
                <li><Link href={'/'}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-4 col-xl-3">
              <span className="d-block mb-2 font-coolvetica" style={{ fontSize: '24px' }}>Business Owners</span>
              <ul className="menu">
                <li><Link href={'/'}>Product Overview</Link></li>
                <li><Link href={'/'}>List your business</Link></li>
                <li><Link href={'/'}>Support</Link></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-4 col-xl-2">
              <span className="d-block mb-2 font-coolvetica" style={{ fontSize: '24px' }}>Explore</span>
              <ul className="menu">
                <li><Link href={'/'}>Product Overview</Link></li>
                <li><Link href={'/'}>List your business</Link></li>
                <li><Link href={'/'}>Support</Link></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-4 col-xl-2">
              <span className="d-block mb-2 font-coolvetica" style={{ fontSize: '24px' }}>Support</span>
              <ul className="menu">
                <li><Link href={'/'}>Product Overview</Link></li>
                <li><Link href={'/'}>List your business</Link></li>
                <li><Link href={'/'}>Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="lead mb-0 text-center">© 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer