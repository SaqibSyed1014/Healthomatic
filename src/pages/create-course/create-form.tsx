import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Tabs } from 'flowbite-react';
import {useLocation, Link, Outlet} from "react-router-dom";

const baseClasses: string = 'flex items-center gap-2 2xl:gap-3'

const tabList = [
    {
        title: <div className={baseClasses}><span className="icon-user-info" /> Basic Information </div>,
        path: '/course/create/basic-information'
    },
    {
        title: <div className={baseClasses}><span className="icon-information-list" /> Advance Information </div>,
        path: '/course/create/advance-information'
    },
    {
        title: <div className={baseClasses}><span className="icon-faq-question" /> FAQ </div>,
        path: '/course/create/faqs'
    },
    {
        title: <div className={baseClasses}><span className="icon-modules-list" /> Modules </div>,
        path: '/course/create/modules'
    },
    {
        title: <div className={baseClasses}><span className="icon-publish" /> Publish </div>,
        path: '/course/create/publish-course'
    }
]

const CreateForm: FC = function () {
    const location = useLocation()

    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="px-4 pt-6">
                <div className="stepper-form rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
                    <Tabs.Group aria-label="Full width tabs" style="underline">
                            {tabList.map(item => {
                                return (
                                    <Tabs.Item
                                        key={item.path}
                                        active={location.pathname === item.path}
                                        title={<Link to={item.path}>{item.title}</Link>}
                                    >
                                        <Outlet />
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
