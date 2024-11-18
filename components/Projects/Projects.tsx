// components/project-detailss.js
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/mb-project/data/project';

const listProject = projects; 

export default function Projects() {
  return (
    <section className="ji gp uq">
    <div className="bb ye ki xn vq jb jo">
      <div className="wc qf pn xo zf iq">
        {listProject.map((project, index) => (
          <div key={index} className="animate_top sg vk rm xm">
            <div className="c rc i z-1 pg">
              <Image
                className="w-full h-60 object-cover rounded-md"
                src={project.imgSrc}
                alt={project.alt}
                width={200} 
                height={200} 
              />
              <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                <Link href={`/mb-project/${project.id}`} className="vc ek rg lk gh sl ml il gi hi">
                  Read More
                </Link>
              </div>
            </div>
            <div className="yh">
              <div className="tc uf wf ag jq">
                <div className="tc wf ag">
                  <Image src="/images/icon-man.svg" alt="User"  width={20} 
  height={20} />
                  <p>{project.author}</p>
                </div>
                <div className="tc wf ag">
                  <Image src="/images/icon-calender.svg" alt="Calendar"   width={20} 
  height={20} />
                  <p>{new Date(project.date).toDateString()}</p>
                </div>
              </div>
              <h4 className="ek tj ml il kk wm xl eq lb">
                <Link  href={`/mb-project/${project.id}`}>
                  {project.title}
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mb lo bq i ua">
        <nav>
          <ul className="tc wf xf bg">
            <li>
              <Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">
                <svg className="th lm ml il" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93884 6.99999L7.88884 11.95L6.47484 13.364L0.11084 6.99999L6.47484 0.635986L7.88884 2.04999L2.93884 6.99999Z" />
                </svg>
              </Link>
            </li>
            <li><Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">2</Link></li>
            <li><Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">3</Link></li>
            <li><Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">4</Link></li>
            <li><Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">...</Link></li>
            <li><Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">12</Link></li>
            <li>
              <Link className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an" href="#">
                <svg className="th lm ml il" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.06067 7.00001L0.110671 2.05001L1.52467 0.636014L7.88867 7.00001L1.52467 13.364L0.110672 11.95L5.06067 7.00001Z" fill="#fefdfo" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Pagination End */}
    </div>
  </section>
  );
}
