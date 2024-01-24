import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Tabs } from 'flowbite-react';
import BasicInformation from "./stepper-form/basic-information";
import AdvanceInformation from "./stepper-form/advance-information";
import FAQ from "./stepper-form/faq";
import Modules from "./stepper-form/modules";
import PublishCourse from "./stepper-form/publish-course";

const baseClasses = 'flex items-center gap-2 2xl:gap-3'

const tabList = [
    {
        title: <div className={baseClasses}><span className="icon-user-info" /> Basic Information </div>,
        component: <BasicInformation />
    },
    {
        title: <div className={baseClasses}><span className="icon-information-list" /> Advance Information </div>,
        component: <AdvanceInformation />
    },
    {
        title: <div className={baseClasses}><span className="icon-faq-question" /> FAQ </div>,
        component: <FAQ />
    },
    {
        title: <div className={baseClasses}><span className="icon-modules-list" /> Modules </div>,
        component: <Modules />
    },
    {
        title: <div className={baseClasses}><span className="icon-publish" /> Publish </div>,
        component: <PublishCourse />
    }
]

const CreateForm: FC = function () {
    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="px-4 pt-6">
                <div className="stepper-form rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
                    <Tabs.Group aria-label="Full width tabs" style="underline">
                        {tabList.map(item => {
                            return (
                                <Tabs.Item title={item.title}>
                                    {item.component}
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
