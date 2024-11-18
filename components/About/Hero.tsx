// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gj do ir hj sp jr i pg">
        <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
         {/*  <Image src="/images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" width={100} height={100} />
          <Image src="/images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" width={100} height={100} />
          <Image src="/images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" width={100} height={100} />
          <Image src="/images/shape-04.svg" alt="shape" className="h q r" width={100} height={100} />*/}
           <Image src="/images/MbtechLogo.png" alt="Woman" className="h q r ua" width={1000} height={1000} />
        </div>

        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc _o">
            <div className="animate_left jn/2">
              <h1 className="fk vj zp or kk wm wb">Innovate with the Future of Technology Today 🚀</h1>
              <p className="fq">
              Our agency provides cutting-edge web2, mobile, and web3 solutions tailored to your business needs. Leverage our expertise to stay ahead in the digital landscape with scalable and efficient technologies.
              </p>

              <div className="tc tf yo zf mb">
                <Link href="/contact">
                  <span className="ek jk lk gh gi hi rg ml il vc _d _l">Get Started Now</span>
                </Link>

                <span className="tc sf">
                  <Link href="/contact">
                    <span className="inline-block ek xj kk wm">Call us (216) 54 000 – 000</span>
                  </Link>
                  <span className="inline-block">For any question or concern</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Features Section */}
     
    </main>
  );
}
