"use client";
import { Project } from "@/app/mb-project/data/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <section className="gj qp gr hj rp hr">
      <div className="bb ze ki xn 2xl:ud-px-0">
        <div className="tc sf yo zf kq">
          <div className="ro">
            <div className="animate_top rounded-md shadow-solid-13 section border border-[#eff6ff] p-7.5 md:p-10">
              <div className="mx-auto prose prose-lg mt-6 max-w-3xl ">
                <h1 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {project.title}
                </h1>

                <ul className="tc uf cg 2xl:ud-gap-15 fb text-[#2563eb] flex flex-wrap items-center space-x-2">
                  <li>
                    <span className="rc kk wm">Author: </span>
                    {project.author}
                  </li>
                  <li>
                    <span className="rc kk wm">Published On: </span>
                    {new Date(project.date).toLocaleDateString()}
                  </li>
                  <li>
                    <span className="rc kk wm">Category: </span>
                    {project.category}
                  </li>
                  <Image
                    src={project.imgSrc}
                    alt="Blog"
                    width={1000}
                    height={1000}
                  />
                  <li className="flex flex-wrap gap-1">
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #webdev
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #tailwindcss
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #frontend
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #NestJs
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #Backend
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #Multitenant
                    </span>
                    <span className="text-sm text-[#2563eb] dark:text-gray-400">
                      #Scale
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
                {" "}
                <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {project.title1}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              <div className="wc qf pn dg cb">
                {project.images.map((imageSrc, index) => (
                  <div key={index} className="image-container">
                    <Image
                      src={imageSrc}
                      alt={`Image ${index + 1} of ${project.title}`}
                      width={1000}
                      height={1000}
                    />
                  </div>
                ))}
              </div>

              <div className="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
                {" "}
                <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {project.title2}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.additionalDescription,
                  }}
                />
              </div>
              <div className="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
                {" "}
                <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {project.title3}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.additionalDescription1,
                  }}
                />
              </div>
              <div className="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
                {" "}
                <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {project.title4}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.additionalDescription2,
                  }}
                />
              </div>
            
            </div>
            <div className="text-center text-white mt-8"> <Link href="/mb-project" className="xl bg-[#3b82f6] px-5 py-3 rounded-full hover:bg-blue-200 transition">← Back to Projects</Link> </div>
          </div>

          <div className="jn/2 so">
            

            <div className="animate_top fb">
              <h4 className="tj kk wm qb">Categories</h4>

              <ul>
                <li className="ql vb du-ease-in-out il xl">
                  <Link href="/mb-project">Finance</Link>
                </li>
                <li className="ql vb du-ease-in-out il xl">
                  <Link href="/mb-project">Culinary</Link>
                </li>
                <li className="ql vb du-ease-in-out il xl">
                  <Link href="/mb-project">Climate</Link>
                </li>
                <li className="ql vb du-ease-in-out il xl">
                  <Link href="/mb-project">Restaurant management system</Link>
                </li>
                
              </ul>
              
            </div>

            <div className="animate_top fb">

            <div className=" mt-8"> <Link href="/mb-project" className=" xl  px-5 py-3 rounded-full hover:bg-gray-100 transition">← Back to Projects</Link> </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
