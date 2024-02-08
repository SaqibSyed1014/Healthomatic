import type { FC } from "react";
import {Link} from "react-router-dom";
import {Button} from "flowbite-react";

const PublishCourse: FC = () => {
  return (
      <form className="publish-course-tab">
        <div className="flex justify-between items-center">
            <h2>Publish</h2>

            <div className="flex gap-2">
                <Link to="/course/create/modules">
                    <Button color="gray">Previous</Button>
                </Link>
                <Link to="/courses">
                    <Button
                        color="primary"
                    >
                        Save & Publish
                    </Button>
                </Link>
            </div>
        </div>

          <hr/>

          <div>
              <h1 className="text-2xl font-bold pb-6">
                  Powering innovation at 200,000+ companies worldwide
              </h1>

              <div className="overview-section">
                  <div className="overview-image overflow-hidden rounded">
                      <img src="../../../../public/images/course-overview.png" alt="Overview"
                           className="w-fuul h-full object-cover"/>
                  </div>

                  <p className="pt-6">
                      Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.
                  </p>
              </div>

          </div>

          <div>
              <h2 className="text-gray-900 dark:text-gray-200 font-bold text-2xl pb-6">
                  Powering innovation at 200,000+ companies worldwide
              </h2>

              <p>
                  Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
              </p>
              <p>
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
              </p>

              <div className="pb-4">
                  <img
                      src="../../../../public/images/course-section-img.png"
                      alt="Section img"
                      className="object-contain w-full h-full"
                  />
              </div>

              <p>
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
              </p>

              <div className="relative overflow-hidden rounded-lg">
                  <img
                      src="../../../../public/images/course-video.png"
                      alt=""
                      className="object-cover w-full h-full"
                  />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[80px] rounded-full h-[80px] bg-white/50 cursor-pointer hover:scale-125 transition">
                      <span className="icon-play text-white text-4xl" />
                  </div>
              </div>
          </div>

          <div>
              <h2 className="text-gray-900 dark:text-gray-200 font-bold text-2xl pb-6">
                  Powering innovation at 200,000+ companies worldwide
              </h2>

              <p>
                  Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
              </p>

              <div className="pb-4">
                  <img
                      src="../../../../public/images/course-section-img.png"
                      alt="Section img"
                      className="object-contain w-full h-full"
                  />
              </div>

              <p>
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
              </p>

              <p>
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
              </p>
          </div>
      </form>
  )
}

export default PublishCourse
