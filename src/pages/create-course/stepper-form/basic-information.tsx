import type { FC } from "react";
import {Label, Select, Button} from "flowbite-react";
import {useState} from "react";
import InputWithOptions from "../../../components/input-with-options";

const BasicInformation: FC = () => {
    const teachItem = { description: '' };
    const [teachList, setList] = useState([
        teachItem
    ])

    function addTeachItem() {
        setList([...teachList, teachItem])
    }

    return (
        <form>
            <h2>Basic information</h2>

            <hr className="border-b border-r-gray-200"/>

            <InputWithOptions
                type="text"
                name="course-subject"
                label="Subject"
                showInputCount={true}
                maxLength={24}
                placeholder="Your course subject"
            />

            <InputWithOptions
                type="text"
                name="course-title"
                label="Title"
                showInputCount={true}
                maxLength={50}
                placeholder="Your course title"
            />

            <div className="relative">
                <Label htmlFor="course-category">
                    Category
                </Label>
                <Select id="course-category" placeholder="Select..." required>
                    <option disabled>Select...</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>

            <hr className="border-b border-r-gray-200"/>

            <div className="flex justify-between items-center">
                <h3>What you will teach in this course ({ teachList.length }/6)</h3>
                <span
                    onClick={addTeachItem}
                    className={`${teachList.length === 6 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-700 cursor-pointer'}`}
                >
                    + Add new
                </span>
            </div>
            {teachList.map((_, index) => {
                    return (
                            <InputWithOptions
                                type="text"
                                name={`course-description-${index+1}`}
                                label={`0${index+1}.`}
                                showInputCount={true}
                                maxLength={80}
                                placeholder="What you will teach in this course"
                            />
                    )
                })
            }

            <div>
                <Button
                    color="primary"
                    className="ml-auto"
                >
                    Save & Next
                </Button>
            </div>
        </form>
    )
}

export default BasicInformation
