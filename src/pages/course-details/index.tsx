import type { FC } from "react";
import Navbar from "../../components/navbar";
import {Breadcrumb, Progress, Accordion, Checkbox} from "flowbite-react";
import {Link} from "react-router-dom";

const modulesList = [
    {
        title: "Module 1",
        list: [
            'Welcome to Envato Market',
            'How browsing and membership works',
            'How buying items works',
            'Becoming an author',
            'Our use of your information',
            'Intellectual property'
        ]
    },
    {
        title: "Module 2",
        list: [
            'How buying items works',
            'Becoming an author',
            'Our use of your information',
        ]
    },
    {
        title: "Module 3",
        list: [
            'Welcome to Envato Market',
            'How buying items works',
            'Intellectual property'
        ]
    },
]

const CourseDetails :FC = function () {

    function scrollToSection(id :string) {
        const element = document.getElementById(id);

        if (element) {
            const scroll = element.getBoundingClientRect();
            window.scrollTo({
                top: scroll.y - 80,
                behavior: "smooth",
            });
        }
    }
    return (
        <div className="relative">
            <Navbar/>

            <div className="bg-gray-50 dark:bg-gray-700 pt-20 pb-3 border-y border-gray-100 dark:border-gray-400">
                <div className="container mx-auto">
                    <Breadcrumb aria-label="Breadcrumb">
                        <Breadcrumb.Item>
                            <Link to="/course/create/modules" className="text-sm text-gray-900 dark:text-gray-300 font-medium">
                                <span className="icon-home mr-2" />Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    Courses
                                </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="flex justify-between items-center pt-4">
                        <h2 className="text-gray-900 dark:text-gray-200 font-bold text-2xl">
                            Powering innovation at 200,000+ companies worldwide
                        </h2>

                        <div className="flex flex-nowrap items-center text-[#4E5566] dark:text-gray-200">
                            <span className="icon-clipboard text-[#C27803] mr-1.5" />
                            <span>Category</span>

                            <span className="icon-box-grid text-[#3F83F8] mr-1.5 ml-4" />
                            <span>
                                Subject
                            </span>

                            <span className="icon-stack text-[#9061F9] mr-1.5 ml-4" />
                            <span>
                                6 Modules
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="course-details-section bg-white dark:bg-gray-800 pt-8 pb-14">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-8">
                            <div className="flex flex-col gap-5">
                                <div className="overview-section">
                                    <div className="overview-image overflow-hidden rounded">
                                        <img src="../../../public/images/course-overview.png" alt="Overview"
                                             className="w-fuul h-full object-cover"/>
                                    </div>

                                    <p className="pt-6">
                                        Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.
                                    </p>
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
                                            src="../../../public/images/course-section-img.png"
                                            alt="Section img"
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    <p>
                                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
                                    </p>

                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src="../../../public/images/course-video.png"
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
                                    <p>
                                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
                                    </p>

                                    <div className="pb-4">
                                        <img
                                            src="../../../public/images/course-section-img.png"
                                            alt="Section img"
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    <p>
                                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
                                    </p>

                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src="../../../public/images/course-video.png"
                                            alt=""
                                            className="object-cover w-full h-full"
                                        />

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[80px] rounded-full h-[80px] bg-white/50 cursor-pointer hover:scale-125 transition">
                                            <span className="icon-play text-white text-4xl" />
                                        </div>
                                    </div>
                                </div>


                                <div id="test">
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
                                            src="../../../public/images/course-section-img.png"
                                            alt="Section img"
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    <p>
                                        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
                                    </p>

                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src="../../../public/images/course-video.png"
                                            alt=""
                                            className="object-cover w-full h-full"
                                        />

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[80px] rounded-full h-[80px] bg-white/50 cursor-pointer hover:scale-125 transition">
                                            <span className="icon-play text-white text-4xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="sticky top-20 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-400 rounded py-3 px-5">
                                <h3 className="font-bold text-base dark:text-gray-200">
                                    Course Content
                                </h3>

                                <div className="pt-3 pb-6">
                                    <div className="font-medium text-green-500 dark:text-green-400 text-end text-sm !pb-1">
                                        70% Completed
                                    </div>
                                    <Progress progress={70} color="green" />
                                </div>

                                <h4 className="font-medium text-base text-gray-900 dark:text-gray-200 pb-3">
                                    Overview
                                </h4>


                                <div className="modules-accordion">
                                    <Accordion collapseAll>
                                        {modulesList.map((item, i) => {
                                            return (
                                                <Accordion.Panel key={i}>
                                                    <Accordion.Title>
                                                        <Checkbox id="accept" onClick={(e) => e.stopPropagation()} />
                                                        <span className="text-gray-900 dark:text-gray-200 font-medium pl-2">
                                                            {item.title}
                                                        </span>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <ul className="flex flex-col gap-3 list-disc marker:text-gray-500 text-gray-500 dark:text-gray-300 px-4">
                                                            {item.list.map((item, i) => {
                                                                return (
                                                                    <li onClick={() => scrollToSection('test')} key={i} className="text-base cursor-pointer hover:text-primary-400 transition">
                                                                        {item}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </Accordion.Content>
                                                </Accordion.Panel>
                                            )
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
