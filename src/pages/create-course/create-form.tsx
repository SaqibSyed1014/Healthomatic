import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Tabs } from 'flowbite-react';
import {useLocation, Link, Outlet, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";

const baseClasses: string = 'flex justify-center items-center pb-4 pt-6 gap-2 2xl:gap-3'

let tabList = [
    {
        title: <div className={baseClasses}><span className="icon-user-info" /> Basic Information </div>,
        path: '/course/create/basic-information',
        active: false
    },
    {
        title: <div className={baseClasses}><span className="icon-information-list" /> Advance Information </div>,
        path: '/course/create/advance-information',
        active: false
    },
    {
        title: <div className={baseClasses}><span className="icon-faq-question" /> FAQ </div>,
        path: '/course/create/faqs',
        active: false
    },
    {
        title: <div className={baseClasses}><span className="icon-modules-list" /> Modules </div>,
        path: '/course/create/modules',
        active: false
    },
    {
        title: <div className={baseClasses}><span className="icon-publish" /> Publish </div>,
        path: '/course/create/publish-course',
        active: false
    }
]

const CreateForm: FC = function () {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const isParentRoute = window.location.pathname.endsWith('/course/create');
    if (isParentRoute) {  // redirect to First step when user navigates to this default route
        return <Navigate to="/course/create/basic-information" replace />;
    }

    useEffect(() => {
        const updatedTabList = tabList.map((item) => {
            if(item.path === location.pathname || location.pathname.startsWith(`${item.path}/`)) {  // checks if route or nested route matches
                return {...item, active: true}
            }
            else return item
        })

        setActiveTab(updatedTabList.find((item) => item.active)?.path || null);
    }, [location.pathname]);

    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="px-4 pt-6">
                <div className="stepper-form rounded-lg bg-white shadow dark:bg-gray-800 mb-5">
                    <Tabs.Group key={activeTab} aria-label="Full width tabs" style="underline">
                            {tabList.map(item => {
                                return (
                                    <Tabs.Item
                                        key={item.path}
                                        active={activeTab === item.path}
                                        title={<Link to={item.path} className="grow">{item.title}</Link>}
                                    >
                                        <div className="p-4 sm:px-6 sm:pt-4 sm:pb-6 xl:p-8 xl:pb-8 xl:pt-6">
                                            <Outlet />
                                        </div>
                                    </Tabs.Item>
                                )
                            })}
                    </Tabs.Group>
                </div>
            </div>
        </NavbarSidebarLayout>
    )
}

export default CreateForm
