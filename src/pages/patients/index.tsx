import type { FC } from "react";
import NavbarSidebar from "../../layouts/navbar-sidebar";
import {Button, Label, TextInput, Checkbox, Table, Avatar, Pagination} from "flowbite-react";
import {
    HiSearch,
    HiOutlineDotsHorizontal
} from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import {patientsTableCol, patientsList} from "../../data/contants";
import { Popover } from 'react-tiny-popover'
import {PropsWithChildren, useState} from "react";
import PatientFormHandler from "./patient-form-handler";
import {Link} from 'react-router-dom'

const PatientsView :FC = function() {
    const [isModalOpen, setModalVisibility] = useState(false)
    return (
        <NavbarSidebar isFooter={false}>
            <div className="px-6 pt-6 pb-8 relative">

                <FilterBar
                    toggleModal={() => setModalVisibility(true)}
                />

                <PatientsTable />

                <PatientFormHandler
                    modalOpen={isModalOpen}
                    toggleModal={() => setModalVisibility(false)}
                />

            </div>
        </NavbarSidebar>
    )
}

interface FilterProps {
    toggleModal: (val :boolean) => void
}

const FilterBar: FC<PropsWithChildren<FilterProps>> = ({ toggleModal }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    return (
        <section className="flex justify-between">
            <div className="flex gap-2">
                <form>
                    <Label htmlFor="search" className="sr-only">
                        Search
                    </Label>
                    <TextInput
                        icon={HiSearch}
                        id="search"
                        name="search"
                        placeholder="Search patients via email, name, username"
                        size={32}
                        type="search"
                    />
                </form>

                    <Popover
                        isOpen={isPopoverOpen}
                        positions={['bottom', 'top']}
                        align='end'
                        onClickOutside={() => setIsPopoverOpen(false)}
                        content={
                            <div className="flex flex-col gap-3 bg-white dark:bg-gray-600 text-gray-900 font-medium shadow-lg rounded-lg text-sm mt-1.5 px-4 py-3">
                                <span>Filter By</span>
                                <div className="action-option flex items-center gap-3">
                                    <Checkbox />
                                    Users
                                </div>
                                <div className="action-option flex items-center gap-3">
                                    <Checkbox />
                                    Username
                                </div>
                                <div className="action-option flex items-center gap-3">
                                    <Checkbox />
                                    Email
                                </div>
                                <div className="action-option flex items-center gap-3">
                                    <Checkbox />
                                    Courses Assigned
                                </div>
                            </div>
                        }
                    >
                        <Button
                            color="lightGray"
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                            <span className="flex items-center gap-2">
                                <span className="icon-filter" />
                                Filter
                                <FaChevronDown />
                            </span>
                        </Button>
                    </Popover>
            </div>
            <div className="flex gap-2">
                <Button
                    color="primary"
                    className="shrink-0"
                    onClick={toggleModal}
                >
                        <span className="icon-plus mr-2" />
                        Add Patient
                </Button>

                <Link to="/letter-generator">
                    <Button
                        color="primaryOutline"
                        className="shrink-0"
                    >
                        <span className="icon-letter mr-2 text-primary-700" />
                        Generate Letter
                    </Button>
                </Link>
            </div>
        </section>
    )
}

const PatientsTable: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="pt-6">
            <Table hoverable>
                <Table.Head>
                    {patientsTableCol.map(item => {
                        return <Table.HeadCell key={item}>{item}</Table.HeadCell>
                    })}
                    <Table.HeadCell>
                        <span className="sr-only">Actions</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {patientsList.map((patient, index) => {
                        return (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index+1}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Avatar img={patient?.image} alt={patient?.name} rounded/>
                                        <span className="font-medium whitespace-nowrap text-gray-900 dark:text-gray-200">
                                            {patient?.name}
                                        </span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>{patient?.username}</Table.Cell>
                                <Table.Cell>{patient?.email}</Table.Cell>
                                <Table.Cell>
                                    {patient?.coursesAssigned.join(', ')}
                                </Table.Cell>
                                <Table.Cell>
                                    <ActionCell />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

            <div className="bg-white p-4 rounded-b-lg border-t border-gray-200">
                <div className="flex overflow-x-auto justify-between items-center">
                <span className="text-gray-500">
                    Showing&nbsp;
                    <span className="text-gray-900 font-medium">
                         1 - 10
                    </span>
                    &nbsp;of&nbsp;
                    <span className="text-gray-900 font-medium">
                         1000
                    </span>
                </span>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={100}
                        onPageChange={onPageChange}
                        previousLabel=""
                        nextLabel=""
                        showIcons
                    />
                </div>
            </div>
        </div>
    )
}

const ActionCell: FC = function() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['bottom', 'top']}
            align='end'
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
                 <div className="flex flex-col py-1 bg-white dark:bg-gray-600 text-gray-500 shadow-lg rounded-lg text-sm 2xl:text-base">
                     <div className="action-option flex items-center gap-3 py-2 px-4 hover:bg-gray-200 cursor-pointer">
                         <div className="flex items-center justify-center w-6">
                             <span className="icon-edit text-lg" />
                         </div>
                         Update course
                     </div>
                     <div className="action-option flex items-center gap-3 py-2 px-4 hover:bg-gray-200 cursor-pointer">
                         <div className="flex items-center justify-center w-6">
                            <span className="icon-opened-eye" />
                         </div>
                         Edit medical details
                     </div>
                     <div className="action-option text-red-500 flex items-center gap-3 py-2 px-4 hover:bg-gray-200 cursor-pointer">
                         <div className="flex items-center justify-center w-6">
                            <span className="icon-trash-bin text-lg hover:text-red-500" />
                         </div>
                         Delete
                     </div>
                 </div>
            }
        >
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                <HiOutlineDotsHorizontal
                    className="text-2xl cursor-pointer ml-6"
                />
            </div>
        </Popover>
    )
}

export default PatientsView
