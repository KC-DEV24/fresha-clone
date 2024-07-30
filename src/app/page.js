import { Footer, Header } from "./components";
import Image from "next/image";
import { CategoriesSec, CountriesSec, ExploreBrandsSec, FaqsSec, ListBrandSec, TestimonialSliderSec } from "./sections";
import HeroSec from "./sections/HeroSec";
import ProductSliderSec from "./sections/ProductsSliderSec";
import "./styles/scss/pages/home.scss";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Image className="body-bg" src={'/img/body-texture-bg.webp'} width={1461} height={974} />
      <Header />
      <div className="main">
        <HeroSec />
        <ProductSliderSec title={'Explore Services Near You'} classes={"pb-0"} cardVarient={'secondary'} />
        <CategoriesSec tag="h2" title="Popular Categories" />
        <ProductSliderSec title={'Recommended'} />
        <ExploreBrandsSec title={'Find and get the best Spa Services near you!'} />
        <ProductSliderSec title={'Last Minute Booking'} classes={"pb-0"} cardVarient={'secondary'} />
        <TestimonialSliderSec title={'Testimonials'} classes={"pb-0"} cardVarient={'secondary'} />
        <ProductSliderSec title={'Specialist Near you!'} />
        <ListBrandSec title={'List your business & get more clients with Us'} />
        <ProductSliderSec title={'Browse Products'} classes={'pb-0'} cardVarient={'primary'} />
        <FaqsSec tag="h5" title="FAQs" />
        <CountriesSec title={'we are everywhere you are'} tag="h6" />
      </div>
      <Footer />
    </main>
  );
}
