import React from 'react';
import Image from 'next/image';
import "@/app/styles/scss/components/_searchbar.scss"
import Link from 'next/link';

const BackwardBtn = ({backwardLink}) => {
  return (
      <Link href={backwardLink} className="d-flex gap-1 align-items-center">
        <Image src={'/img/icons/stroke-arrow-left.svg'} width={26} height={17} alt='arrow-icon' />
        <Image src={'/img/logo.svg'} width={92} height={21} alt='logo-img' />

      </Link>
  )
}

export default BackwardBtn;