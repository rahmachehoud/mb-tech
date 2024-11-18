// components/Services.js
import Image from 'next/image';

export default function Services() {
  const services = [
    { title: 'Web2 Development',description:'Expert development using modern frameworks like React, Vue, and Svelte for dynamic and responsive websites.', imgSrc: '/images/icon-04.svg' },
    { title: 'Mobile Development', description:'Creating robust and intuitive mobile applications with React Native and Flutter for both iOS and Android platforms.',imgSrc: '/images/icon-05.svg' },
    { title: 'Web3 Integration', description:'Building decentralized applications (dApps) with blockchain technology to ensure secure and transparent transactions.',imgSrc: '/images/icon-06.svg' },
    { title: 'Broad Integration', description:'Supporting various technologies like TypeScript, Tailwind CSS, and Sass for a seamless development process.',imgSrc: '/images/icon-07.svg' },
    { title: 'SEO Optimization', description:'Enhancing your online presence with automatic sitemaps, RSS feeds, and other SEO best practices.',imgSrc: '/images/icon-05.svg' },
    { title: 'Community and Support',description:'Providing excellent support and being part of a thriving open-source community.', imgSrc: '/images/icon-06.svg' },
  ];

  return (
    <section className="lj tp kr">
      <div className="animate_top bb ze rj ki xn vq">
        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Comprehensive IT Solutions for Your Business</h2>
        <p className="bb on/5 wo/5 hq">Our agency leverages state-of-the-art tools and innovative technologies to provide top-tier web2, mobile, and web3 development services, ensuring your business stays ahead in the digital landscape.</p>
      </div>

      <div className="bb ze ki xn yq mb en">
        <div className="wc qf pn xo ng">
          {services.map((service, index) => (
            <div key={index} className="animate_top sg oi pi zq ml il am cn _m">
              <Image src={service.imgSrc} alt={service.title} width={50} height={50} />
              <h4 className="ek zj kk wm nb _b">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
