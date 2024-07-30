import Image from 'next/image';
import { Searchbar } from '@/app/components';

const HeroSec = () => {
    return (
        <section className="hero-sec">
            <div className="container">
                <div className="conent-wrapper mx-auto text-center" style={{ maxWidth: '1000px' }}>
                    <h1 className="main-title font-coolvetica"> local spa services right
                        at your <span className="stroke text-primary">fingertips!</span></h1>
                    <p className="lead" style={{ fontSize: '24px' }}>Discover a world of Spa, wellness and beauty services.</p>
                    <Searchbar />
                    <Image src={'/img/stars-icons.webp'} width={110} height={19} alt='rating-stars' className='mb-2' />
                    <span className="d-block" style={{ fontSize: 'clamp(24px, 5vw, 30px)' }}>Loved By More than 2000+ Peoples</span>
                    <p className="lead">Connecting spa clients with service providers has never been simpler!</p>
                    <div className="d-flex justify-content-center">
                        <div className='avatars-wrapper'>
                            <Image src={'/img/avatar/dummy-avatar-1.webp'} alt={'user-avatar'} width={40} height={40}/>
                            <Image src={'/img/avatar/dummy-avatar-2.webp'} alt={'user-avatar'} width={40} height={40}/>
                            <Image src={'/img/avatar/dummy-avatar-3.webp'} alt={'user-avatar'} width={40} height={40}/>
                            <Image src={'/img/avatar/dummy-avatar-4.webp'} alt={'user-avatar'} width={40} height={40}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="obj obj-1"></div>
            <div className="obj obj-2"></div>
            <div className="obj obj-3"></div>
        </section>
    )
}

export default HeroSec