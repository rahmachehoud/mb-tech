// components/CTA.js
import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="i pg gh ji" >
   
    <Image className="h p q" src="images/shape-16.svg" width={100} 
  height={100} alt="Bg Shape" />
  
    <div className="bb ye i z-10 ki xn dr">
      <div className="tc uf sn tn un gg">
        <div className="animate_left to/2">
          <h2 className="fk vj zp pr lk ac">
          Empower Your Digital Presence.
          </h2>
          <p className="lk">
          Leveraging the latest in web2, mobile, and web3 technologies, we build fast, reliable, and scalable solutions tailored to your needs.
          </p>
        </div>
        <div className="animate_right bf">
          <Link href="/mb-project" className="vc ek kk hh rg ol il cm gi hi">
             Discover More
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
}