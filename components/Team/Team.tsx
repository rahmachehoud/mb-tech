import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    { name: 'Moetaz Brayek', position: 'CEO', imgSrc: '/images/team-02.png',linkedIn:'moetazbrayek'  },
    { name: 'Chihab Hajji', position: 'CTO', imgSrc: '/images/team-01.png',linkedIn:'chihab-hajji-929772138' },
   
  ];

  return (
    <section className="i pg ji gp uq relative">
      {/* Background Shapes */}
     <span className="rc h s r vd fd/5 fh rm absolute top-0 left-0 z-0"></span>
     { /* <Image src="/images/shape-08.svg" alt="Shape Bg" width={100} 
  height={100} className="h q r absolute top-0 left-0 z-0" />
      <Image src="/images/shape-09.svg" alt="Shape" width={100} 
  height={100} className="of h y z/2 absolute top-0 left-0 z-0" />
      <Image src="/images/shape-10.svg" alt="Shape" width={100} 
  height={100} className="h _ aa absolute top-0 left-0 z-0" />
      <Image src="/images/shape-11.svg" alt="Shape" width={100} 
  height={100} className="of h m ba absolute top-0 left-0 z-0" />*/}

      {/* Section Title */}
      <div className="animate_top bb ze rj ki xn vq relative z-10">
        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Meet With Our Creative Dedicated Team</h2>
        <p className="bb on/5 wo/5 hq">
          We&apos;re a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.
        </p>
      </div>

      {/* Team Members */}
      <div className="bb ze i va ki xn xq jb jo">
        <div className="wc qf pn  gg cp flex justify-center items-center flex-wrap gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className=" animate_top rj">
              <div className="c i pg z-1 relative">
                <Image src={member.imgSrc} alt={member.name} width={500} height={500} className="vd rounded-tl-lg rounded-tr-lg " />
                <div className="ef im nl il relative">
                  <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa absolute top-0 left-0 z-1"></span>
                  <span className="h s p rc vd hd mh va absolute top-0 left-0 z-1"></span>
                  <div className="h s p vd ij jj xa absolute top-0 left-0 z-1">
                    <ul className="tc xf wf gg">
                    <li>
                        <a href="https://facebook.com/"
										target="_blank"
										rel="noopener noreferrer">
                          <svg className="uh vl ml il" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                     
                      <li>
                        <a  href={`https://tn.linkedin.com/in/${member.linkedIn}`}
										target="_blank"
										rel="noopener noreferrer">
                          <svg className="uh vl ml il" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665V2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665V5.06665Z" fill=""/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="yj go kk wm ob zb">{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       
    </section>
  );
}
