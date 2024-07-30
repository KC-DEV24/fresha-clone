import BackwardBtn from '@/app/components/BackwardBtn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserFlowSec = ({ tag: Tag = 'h1', title }) => {
  return (
    <section className="default-sec user-flow-sec p-0 overflow-hidden">
      <div className="row">
        <div className="col-lg-6">
          <div className="content-wrapper">
            <BackwardBtn backwardLink={'/'} />
            <div className='mx-auto w-100' style={{ maxWidth: '540px' }}>
              <Tag className="font-gilroy-semibold mb-3 h3">{title}</Tag>
              <Link href={'/auth'} className='d-flex justify-content-between gap-2 align-items-center primary-bordered-card mb-2'>
                <div>
                  <span className="d-block font-gilroy-semibold" style={{fontSize: 'clamp(18px, 3vw, 20px)'}}>For Everyone</span>
                  <span className="d-block" style={{ color: 'var(--gray3)' }}>Book saloons and spas near you</span>
                </div>
                <Image src={'/img/icons/stroke-arrow-right-light.svg'} width={22} height={14} />
              </Link>
              <Link href={'/login'} className='d-flex justify-content-between gap-2 align-items-center primary-bordered-card'>
                <div>
                  <span className="d-block font-gilroy-semibold" style={{fontSize: 'clamp(18px, 3vw, 20px)'}}>For Business</span>
                  <span className="d-block" style={{ color: 'var(--gray3)' }}>Manage and grow your business</span>
                </div>
                <Image src={'/img/icons/stroke-arrow-right-light.svg'} width={22} height={14} />
              </Link>
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <Link href={'/'} className="d-flex align-items-center gap-1 text-gray-2">
                <Image src={'/img/icons/language-globe-icon.svg'} width={20} height={20} alt='globe-icon' />
                <span className="d-block">English</span>
              </Link>
              <Link href={'/'} className="d-flex align-items-center gap-1 text-gray-2">
                <Image src={'/img/icons/support-gear-icon.svg'} width={20} height={20} alt='globe-icon' />
                <span className="d-block">Support</span>
              </Link>
            </div>

          </div>
        </div>
        <div className="col-lg-6 position-relative">
          <Image src={'/img/user-flow-sec-img.webp'} width={773} height={1024} className='img-fluid sec-img' />
        </div>

      </div>
      <div className="obj obj-2"></div>
      <div className="obj obj-3"></div>
    </section>
  )
}

export default UserFlowSec