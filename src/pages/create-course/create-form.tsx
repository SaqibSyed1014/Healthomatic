import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Tabs } from 'flowbite-react';
import {useLocation, Link, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import BasicInformation from "./stepper-form/basic-information";
import AdvanceInformation from "./stepper-form/advance-information";
import Faqs from "./stepper-form/faq";
import {Modules, HandleModuleContent} from "./stepper-form/modules";
import PublishCourse from "./stepper-form/publish-course";

const baseClasses: string = 'flex justify-center items-center pb-4 pt-6 gap-2 2xl:gap-3'

let tabList = [
    {
        title: <div className={baseClasses}><span className="icon-user-info" /> Basic Information </div>,
        path: '/course/create/basic-information',
        active: false,
        component: <BasicInformation />
    },
    {
        title: <div className={baseClasses}><span className="icon-information-list" /> Advance Information </div>,
        path: '/course/create/advance-information',
        active: false,
        component: <AdvanceInformation />
    },
    {
        title: <div className={baseClasses}><span className="icon-faq-question" /> FAQ </div>,
        path: '/course/create/faqs',
        active: false,
        component: <Faqs />
    },
    {
        title: <div className={baseClasses}><span className="icon-modules-list" /> Modules </div>,
        path: '/course/create/modules',
        active: false,
        component: <Modules />
    },
    {
        title: <div className={baseClasses}><span className="icon-modules-list" /> Modules </div>,
        path: '/course/create/modules/:moduleName',
        active: false,
        component: <Modules />
    },
    {
        title: <div className={baseClasses}><span className="icon-publish" /> Publish </div>,
        path: '/course/create/publish-course',
        active: false,
        component: <PublishCourse />
    }
]

const CreateForm: FC = function () {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const isParentRoute = window.location.pathname.endsWith('/course/create');
    if (isParentRoute) {  // redirect to First step when user navigates to this default route
        return <Navigate to="/course/create/basic-information" replace />;
    }

    const tabViewStyles = [
        'p-4 sm:px-6 sm:pt-4 sm:pb-6 xl:p-8 xl:pb-8 xl:pt-6'
    ]

    return (
        <NavbarSidebarLayout isFooter={false}>
            <div key={activeTab} className="px-4 pt-6">
                <div className="stepper-form rounded-lg bg-white shadow dark:bg-gray-800 mb-5">
                    <Tabs.Group key={activeTab} aria-label="Full width tabs" style="underline">
                            <Tabs.Item
                                active={activeTab === tabList[0]?.path}
                                title={<Link to="/course/create/basic-information" className="grow">{tabList[0]?.title}</Link>}
                            >
                                <div className={tabViewStyles.join(' ')}>
                                    <BasicInformation />
                                </div>
                            </Tabs.Item>
                        <Tabs.Item
                            active={activeTab === tabList[1]?.path}
                            title={<Link to="/course/create/advance-information" className="grow">{tabList[1]?.title}</Link>}
                        >
                            <div className={tabViewStyles.join(' ')}>
                                <AdvanceInformation />
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            active={activeTab === tabList[2]?.path}
                            title={<Link to="/course/create/faqs" className="grow">{tabList[2]?.title}</Link>}
                        >
                            <div className={tabViewStyles.join(' ')}>
                                <Faqs />
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            active={(activeTab === tabList[3]?.path) || location.pathname.startsWith(`${tabList[3]?.path}/`)}
                            title={<Link to="/course/create/modules" className="grow">{tabList[3]?.title}</Link>}
                        >
                            <div className={tabViewStyles.join(' ')}>
                                { location.pathname.startsWith(`${tabList[3]?.path}/`) ? <HandleModuleContent /> : <Modules />}
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            active={activeTab === tabList[5]?.path}
                            title={<Link to="/course/create/publish-course" className="grow">{tabList[5]?.title}</Link>}
                        >
                            <div className={tabViewStyles.join(' ')}>
                                <PublishCourse />
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </NavbarSidebarLayout>
    )
}

export default CreateForm
