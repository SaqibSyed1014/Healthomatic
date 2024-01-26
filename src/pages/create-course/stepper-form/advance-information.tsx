import type { FC } from "react";
import {Button, Label, Select, FileInput} from "flowbite-react";
import InputWithOptions from "../../../components/input-with-options";
import {duration, languages} from "../../../data/contants";

const AdvanceInformation: FC = () => {

    return (
        <form className="grid-view">
            <div className="col-span-2">
                <h2>Advance information</h2>
            </div>

            <div>
                <Label>Course Thumbnail</Label>
                <div
                    className="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="grid grid-cols-12 justify-center items-center gap-3 px-4 py-6">
                        <div className="col-span-5 text-center">
                            <span className="icon-upload-outline text-gray-500 dark:text-white text-xl"/>
                            <p className="text-gray-700 dark:text-white">
                                Course Thumbnail<br />
                                (192*258px)
                            </p>
                        </div>
                        <div className="col-span-7">
                            <p className="mb-5 text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
                                Upload your course Thumbnail here.
                                <span className="font-bold">Important guidelines:</span>
                                192x258 pixels or 32:43 Ratio. Supported format:
                                <span className="font-bold">.jpg, .jpeg, or .png</span>
                            </p>
                            <div>
                                <Button
                                    size="sm"
                                    color="lightPrimary"
                                    onClick={() => document.getElementById("thumbnail-file")?.click()}
                                >
                                    Upload Image <span className="icon-upload-outline ml-2"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <FileInput id="thumbnail-file" className="hidden" />
                </div>
            </div>

            <div>
                <Label>Course Overview</Label>
                <div
                    className="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="grid grid-cols-12 justify-center items-center gap-3 px-4 py-6">
                        <div className="col-span-5 text-center">
                            <span className="icon-upload-outline text-gray-500 dark:text-white text-xl"/>
                            <p className="text-gray-700 dark:text-white">
                                Course Overview
                            </p>
                        </div>
                        <div className="col-span-7">
                            <p className="mb-5 text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
                                Patients who watch a well-made promo video/meaningful picture are 5X more likely to build connection and trust with their doctors.
                            </p>
                            <div>
                                <Button
                                    size="sm"
                                    color="lightPrimary"
                                    onClick={() => document.getElementById("overview-file")?.click()}
                                >
                                    Upload Image/video <span className="icon-upload-outline ml-2"/>
                                </Button>

                                <FileInput id="overview-file" className="hidden" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative">
                <Label htmlFor="course-language">
                    Course Language
                </Label>
                <Select id="course-language" placeholder="Select..." required>
                    {languages.map(item => {
                        return (
                            <option key={item}>{item}</option>
                        )
                    })}
                </Select>
            </div>

            <div className="relative">
                <Label htmlFor="course-duration">
                    Course Duration

                </Label>
                <Select id="course-duration" placeholder="Select..." required>
                    {duration.map(item => {
                        return (
                            <option key={item}>{item}</option>
                        )
                    })}
                </Select>
            </div>

            <div className="col-span-2">
                <InputWithOptions
                    isTextArea={true}
                    rows={6}
                    name="course-description"
                    label="Course Desscription"
                    placeholder="Enter you course descriptions"
                />
            </div>

            <div className="col-span-2 flex justify-between">
                <Button color="gray">Previous</Button>
                <Button
                    color="primary"
                >
                    Save & Next
                </Button>
            </div>
        </form>
    )
}

export default AdvanceInformation
