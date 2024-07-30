import React from 'react';
import Image from 'next/image';
import "@/app/styles/scss/components/_searchbar.scss"

const Searchbar = () => {
  return (
    <div className="searchbar-wrapper">
      <div className="row g-2 g-lg-1">
        <div className="col-lg-5">
          <div className="custom-input-wrapper">
            <Image src={'/img/icons/search-icon.svg'} width={24} height={24} />
            <input type="text" className="custom-input service" placeholder='Search by Name, Service, Person' />
          </div>
        </div>
        <div className="col-xs-6 col-lg-3">
          <div className="custom-input-wrapper">
            <Image src={'/img/icons/map-marker-icon.svg'} width={24} height={24} />
            <input type="text" className="custom-input location" placeholder='Seattle, WA, US' />
          </div>
        </div>
        <div className="col-xs-6 col-lg-3">
          <div className="custom-input-wrapper">
            <Image src={'/img/icons/calendar-icon.svg'} width={24} height={24} />
            <input type="text" className="custom-input date" placeholder='Dates' />
          </div>
        </div>
        <div className="col-lg-1">
          <button className='custom-serchbar-btn btn-primary'>
            <span>Search</span>
            <Image src={'/img/icons/search-icon.svg'} width={24} height={24} />

          </button>

        </div>
      </div>
    </div>
  )
}

export default Searchbar;