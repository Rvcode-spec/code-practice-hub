import Onestopsolution from '@/components/aboutus/onestopsolution';
import Ourcustomerslove from '@/components/aboutus/Ourcustomerslove';
import DoorstepService from '@/components/home/doorstepService';
import Hero from '@/components/home/hero';
import HomeBusinessService from '@/components/home/homeBusinessService';
import HomeItsolution from '@/components/home/homeITsolution';
import HomeService from '@/components/home/homeService';
import HomeStoreService from '@/components/home/homeStoreService';
import HomeSupport from '@/components/home/homeSupport';
import HomeTestimonials from '@/components/home/homeTestimonials';
import NeuesteBlogs from '@/components/home/neuesteBlogs';
import SimpleService from '@/components/home/simpleService';
import Statistic from '@/components/home/statistic';
import RegisterAdvice from '@/components/home/registerAdvice';

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-10">
          <Hero />
        </div>
        <div className="mt-24 md:mb-16">
          <HomeService />
        </div>
        <HomeSupport />
      </div>
      <div>
        <HomeItsolution />
      </div>
      <div>
        <SimpleService />
      </div>
      <div>
        <Statistic />
      </div>
      <div>
        <HomeBusinessService />
      </div>
      <div>
        <HomeStoreService />
      </div>
      <div>
        <DoorstepService />
      </div>
      <div>
        <HomeTestimonials />
      </div>
      <div className="-mt-8 mb-8 gap-3">
        <Ourcustomerslove />
      </div>
      <div>
        <Onestopsolution />
      </div>
      <div>
        <NeuesteBlogs />
      </div>
      <div>
        <RegisterAdvice />
      </div>
    </>
  );
}
