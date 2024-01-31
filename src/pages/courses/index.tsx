import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import {TextInput, Label, Select, Badge, Dropdown, Modal, Button} from "flowbite-react";
import { Popover } from 'react-tiny-popover'
import { LuSearch } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import {sortFilterOptions, categoryFilterOptions, courseList, suggestedUsers} from "../../data/contants";
import {PropsWithChildren, useState} from "react";
import { RxCross2 } from "react-icons/rx";
import {useNavigate} from "react-router-dom";

interface Props {
    course: any
}
interface PropsMeta {
    selectedUsers: any
}
const FilterBar: FC = function() {
    return (
        <div className="course-filter-bar">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                    <Label htmlFor="search-course" value="Search" />
                    <TextInput
                        id="search-course"
                        type="search"
                        icon={LuSearch}
                        placeholder="Search in your courses..."
                    />
                </div>
                <div className="col-span-3">
                    <Label htmlFor="sort-filter" value="Sort By" />
                    <Select
                        id="sort-filter"
                    >
                        {sortFilterOptions.map(item => {
                            return (
                                <option
                                    key={item.value}
                                    value={item.text}
                                >{item.text}</option>
                            )
                        })}
                    </Select>
                </div>
                <div className="col-span-3">
                    <Label htmlFor="category-filter" value="Category" />
                    <Select
                        id="category-filter"
                    >
                        {categoryFilterOptions.map(item => {
                            return (
                                <option
                                    key={item.value}
                                    value={item.text}
                                >{item.text}</option>
                            )
                        })}
                    </Select>
                </div>
            </div>
        </div>
    )
}

const CourseCard: FC<PropsWithChildren<Props>> = function ({ course }) {
    const navigate = useNavigate();
    const [openDeleteModal, setDeleteModal] = useState(false);

    return (
        <>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
                <div className="flex justify-between items-start gap-4 pb-2">
                    <div className="course-title text-lg text-gray-900 dark:text-white font-bold">
                        {course.title}
                    </div>

                    <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => <span><BsThreeDots
                            className="text-2xl text-gray-500 dark:text-white cursor-pointer"/></span>}
                    >
                        <Dropdown.Item onClick={() => navigate('/course/edit/basic-information')}>
                            <span className="icon-edit mr-2"/>
                            Edit Course
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setDeleteModal(true)}>
                            <span className="icon-trash-bin mr-2"/>
                            Delete Course
                        </Dropdown.Item>
                    </Dropdown>
                </div>

                <div className="course-image overflow-hidden rounded-xl my-2.5 h-[160px]">
                    <img src={course.image} alt="Course Picture" className="w-full h-full object-cover"/>
                </div>

                <div className="course-description pb-4">
                    <p className="text-gray-500 dark:text-gray-300">{course.description}</p>
                </div>

                <div className="course-meta flex justify-between items-center">
                    <div className="course-badges">
                        {course.tags.map((item: string) => {
                            return <Badge key={item} size="lg" color="purple">{item}</Badge>
                        })}
                    </div>

                    <span className="flex items-center gap-2">
                    <CourseMeta selectedUsers={course.selectedUser}/>
                </span>
                </div>
            </div>

            <Modal size="sm" dismissible show={openDeleteModal} onClose={() => setDeleteModal(false)}>
                <Modal.Header />
                <Modal.Body className="text-center">
                    <span className="icon-info-exclamation text-2xl text-gray-400 dark:text-gray-200"></span>
                    <h3 className="mb-5 text-base 2xl:text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">
                        Are you sure you want to delete the module? You can’t undo this action.
                    </h3>

                    <div className="flex justify-center gap-4 pt-5">
                        <Button color="failure" onClick={() => setDeleteModal(false)}>
                            Yes, I'm sure
                        </Button>
                        <Button color="gray" onClick={() => setDeleteModal(false)}>
                            No, cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>


    )
}

const CourseMeta: FC<PropsWithChildren<PropsMeta>> = function ({ selectedUsers }) {
    const [selectedUserList, setSelectedUsers] = useState([...selectedUsers])
    const [users, setUsers] = useState([...suggestedUsers])
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    function searchUsers(e :any) {
        let value = e.target.value;
        if (!value.length) {
            setUsers(suggestedUsers);
            return;
        }
        setUsers(suggestedUsers.filter(user => user.name.toLowerCase().includes(value.toLowerCase())))
    }

    function selectSuggestedUser(user :any) {
        setSelectedUsers([...selectedUserList, user]);
        setUsers(users.filter(item => item.id !== user.id))
    }

    function removeUser(user :any) {
        setSelectedUsers(selectedUserList.filter(item => item.id !== user.id))
        setUsers([...users, user]);
    }

    return (
        <>
            <Popover
                isOpen={isPopoverOpen}
                positions={['bottom', 'top']}
                align='start'
                onClickOutside={() => setIsPopoverOpen(false)}
                content={
                    <div className="w-[325px] text-gray-500 bg-white dark:bg-gray-800 rounded-lg shadow-sm mt-1.5">
                        <div className="py-2 text-gray-500">
                            <div className="flex flex-col gap-4 py-2 grow">
                                <div className="user-avatars flex flex-wrap gap-3 px-3">
                                    {selectedUserList?.length ?
                                        selectedUserList.map((item: any, index: number) => {
                                            return (
                                                <Badge key={index} color="lightGray">
                                                    <div className="flex items-center group">
                                                        <div
                                                            className="rounded-full overflow-hidden w-[30px] h-[30px] border border-white">
                                                            <img src={item.image} alt="User"
                                                                 className="w-full h-full object-cover"/>
                                                        </div>
                                                        <span className="font-normal ml-1 mr-0.5">{item.name}</span>

                                                        <RxCross2 onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeUser(item)
                                                        }} className="cursor-pointer hover:text-red-600 transition text-lg mr-1"/>
                                                    </div>
                                                </Badge>
                                            )
                                        })
                                        :
                                        <span className="leading-none dark:text-gray-200">No users are selected</span>
                                    }
                                </div>

                                <TextInput
                                    id="search-course"
                                    type="search"
                                    icon={LuSearch}
                                    placeholder="Search patient names, email"
                                    onChange={(e) => searchUsers(e)}
                                    className="px-3"
                                />

                                <p className="text-gray-500 font-medium text-left leading-none px-3">Suggested people</p>

                                <div className="flex flex-col -mt-1">
                                    {users?.length ?
                                        users.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        selectSuggestedUser(item)
                                                    }}
                                                    key={index}
                                                    className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer px-3 py-1">
                                                    <div
                                                        className="rounded-full overflow-hidden w-[30px] h-[30px] border border-gray-300">
                                                        <img src={item.image} alt="User"
                                                             className="w-full h-full object-cover"/>
                                                    </div>
                                                    <span className="text-gray-900 font-medium dark:text-gray-200">{item.name}</span>
                                                </div>
                                            )})
                                        :
                                        <p className="dark:text-gray-200 text-sm px-10 text-center">No users are suggested at the moment</p>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                }
            >
                <div
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                    className="rounded-full bg-green-600 hover:bg-gray-700 dark:hover:bg-gray-500 transition shrink-0 flex items-center justify-center w-[20px] h-[20px] cursor-pointer">
                    <span className="icon-plus text-white text-xs pt-[2px]" />
                </div>
            </Popover>

            {Boolean(selectedUserList.length) && <span className="dark:text-white">{selectedUserList.length}</span>}
        </>
    )
}

const Courses: FC = function() {
    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="px-6 pt-6 mb-5">
                <FilterBar />

                <div className="courses-list grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 pt-5">
                    {courseList.map((item, index) => <CourseCard key={index} course={item} />)}
                </div>
            </div>
        </NavbarSidebarLayout>
    )
}

export default Courses
