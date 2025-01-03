"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [sectionTitle] = useState("Let's Stay Connected ");
  const [sectionTitleText] = useState(
    "Whether you have questions, ideas, or simply want to connect, we’re here for you! Schedule a meeting at a time that works best for you by clicking the button below. We’re excited to hear from you and discuss how we can achieve great things together."
  );
  return (
    <section id="support" className="i pg fh rm ji gp uq">
      <Image src="images/shape-06.svg" alt="Shape" className="h aa y" width={100} height={100} />
      <Image src="images/shape-03.svg" alt="Shape" className="h ca u" width={100}height={100}/>
      <Image src="images/shape-07.svg" alt="Shape" className="h w da ee" width={100}height={100}/>
      <Image src="images/shape-12.svg" alt="Shape" className="h p s" width={100}height={100}/>
      <Image src="images/shape-13.svg" alt="Shape" className="h r q" width={100}height={100}/>

      <div className="i va bb ye ki xn wq jb mo">
        <div className="tc uf sn tf rn un zf xl:gap-10">
          <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
            <Image src="images/shape-03.svg" alt="Shape" className="h la x wd" width={100}height={100}/>
            <Image
              src="images/shape-06.svg"
              alt="Shape"
              className="h la ma ne kf"
              width={100} height={100}
            />

            <div className="fb">
              <h4 className="wj kk wm cc">Email Address</h4>
              <p>
                <a href="/contact">contact@mb-tech.dev</a>
              </p>
            </div>
            <div className="fb">
              <h4 className="wj kk wm cc">Office Location</h4>
              <p>Tunisia.</p>
            </div>
            <div className="fb">
              <h4 className="wj kk wm cc">Phone Number</h4>
              <p>
                <a href="#">+(216) 54 000 000</a>
              </p>
            </div>

            <span className="rc nd rh tm lc fb"></span>

            <div>
              <h4 className="wj kk wm qb">Social Media</h4>
              <ul className="tc wf fg">
                <li>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c tc wf xf ie ld rg ml il tl"
                  >
                    <svg
                      className="th lm ml il"
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c tc wf xf ie ld rg ml il tl"
                  >
                    <svg
                      className="th lm ml il"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3153 2.18484C18.6155 2.4944 17.8733 2.6977 17.1134 2.78801C17.9144 2.30899 18.5138 1.55511 18.8001 0.666844C18.0484 1.11418 17.2244 1.42768 16.3654 1.59726C15.7885 0.979958 15.0238 0.57056 14.1901 0.432713C13.3565 0.294866 12.5007 0.436294 11.7558 0.835009C11.0108 1.23372 10.4185 1.86739 10.0708 2.63749C9.72313 3.40759 9.63963 4.27098 9.83327 5.09343C8.30896 5.01703 6.81775 4.62091 5.45645 3.93079C4.09516 3.24067 2.89423 2.27197 1.93161 1.08759C1.59088 1.67284 1.41182 2.33814 1.41278 3.01534C1.41278 4.34451 2.08928 5.51876 3.11778 6.20626C2.50912 6.1871 1.91386 6.02273 1.38161 5.72685V5.77451C1.38179 6.65974 1.68811 7.51766 2.24864 8.20282C2.80916 8.88797 3.58938 9.3582 4.45703 9.53376C3.89201 9.68688 3.29956 9.70945 2.72453 9.59976C2.96915 10.3617 3.44595 11.0281 4.08815 11.5056C4.73035 11.9831 5.50581 12.2478 6.30594 12.2627C5.51072 12.8872 4.60019 13.3489 3.62642 13.6213C2.65264 13.8938 1.63473 13.9716 0.630859 13.8503C2.38325 14.9773 4.4232 15.5756 6.50669 15.5737C13.5586 15.5737 17.415 9.73176 17.415 4.66535C17.415 4.50035 17.4104 4.33351 17.4031 4.17035C18.1537 3.62783 18.8016 2.95578 19.3162 2.18576L19.3153 2.18484Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tn.linkedin.com/company/mb-tech-tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c tc wf xf ie ld rg ml il tl"
                  >
                    <svg
                      className="th lm ml il"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq space-y-6">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div>
                <div className="animate_top bb ze rj ki xn vq mb-6">
                  <h2 className="fk vj pr kk wm on/5  bb _b mb-6">
                    {sectionTitle}
                  </h2>
                  <p className="bb on/5 wo/5  mb-6">{sectionTitleText}</p>
                </div>
              </div>

              <div className="tc xf mb-6">
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vc rg lk gh ml il hi gi _l text-xl font-bold py-4 px-8"
                >
                  Schedule Now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
