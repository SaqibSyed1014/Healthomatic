import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import {TextInput, Label, Select, Badge, Dropdown} from "flowbite-react";
import { LuSearch } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import {sortFilterOptions, categoryFilterOptions, courseList, suggestedUsers} from "../../data/contants";
import {PropsWithChildren} from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
    course: any
}
interface PropsMeta {
    count: number
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
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start gap-4 pb-2">
                <div className="course-title text-lg text-gray-900 font-bold">
                    {course.title}
                </div>

                <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => <span><BsThreeDots className="text-2xl text-gray-500 cursor-pointer" /></span>}
                >
                    <Dropdown.Item>
                        <span className="icon-edit mr-2" />
                        Edit Course
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <span className="icon-trash-bin mr-2" />
                        Delete Course
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="course-image overflow-hidden rounded-xl my-2.5 h-[160px]">
                <img src={course.image} alt="Course Picture" className="w-full h-full object-cover" />
            </div>

            <div className="course-description pb-4">
                <p className="text-gray-500">{course.description}</p>
            </div>

            <div className="course-meta flex justify-between items-center">
                <div className="course-badges">
                    {course.tags.map((item :string) => {
                        return <Badge key={item} size="lg" color="purple">{item}</Badge>
                     })}
                </div>

                <span className="flex items-center gap-2">
                    <CourseMeta count={course.receiversCount} selectedUsers={course.selectedUser} />
                </span>
            </div>
        </div>
    )
}

const CourseMeta: FC<PropsWithChildren<PropsMeta>> = function ({ count, selectedUsers }) {
    const addUserElement = <div
        className="rounded-full bg-green-600 shrink-0 flex items-center justify-center w-[20px] h-[20px] cursor-pointer">
        <span className="icon-plus text-white text-xs"/>
    </div>
    return (
        <>
            <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => <span>{addUserElement}</span>}
            >
                <Dropdown.Item className="hover:!bg-white w-[350px]">
                    <div className="flex flex-col gap-3 py-2 grow">
                        <div className="user-avatars flex flex-wrap gap-3">
                            {selectedUsers?.length ?
                                selectedUsers.map((item :any, index :number) => {
                                    return (
                                        <Badge key={index} color="lightGray">
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-full overflow-hidden w-[30px] h-[30px] border border-white">
                                                    <img src={item.image} alt="User"
                                                         className="w-full h-full object-cover"/>
                                                </div>
                                                <span className="font-normal">{item.name}</span>

                                                <RxCross2 className="text-lg mr-1" />
                                            </div>
                                        </Badge>
                                    )
                                })
                                :
                                <p>No users are selected</p>
                            }
                        </div>

                        <TextInput
                            id="search-course"
                            type="search"
                            icon={LuSearch}
                            placeholder="Search patient names, email"
                        />

                        <p className="text-gray-500 text-left">Suggested people</p>

                        <div className="flex flex-col gap-2">
                            {suggestedUsers.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="rounded-full overflow-hidden w-[30px] h-[30px] border border-white">
                                            <img src={item.image} alt="User"
                                                 className="w-full h-full object-cover"/>
                                        </div>
                                        <span className="font-normal">{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </Dropdown.Item>
            </Dropdown>
            {Boolean(count) && count}
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
