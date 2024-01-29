import type { FC } from "react";
import {useEffect} from 'react';
import {Button, Label, Select} from "flowbite-react";
import InputWithOptions from "../../../components/input-with-options";
import {duration, languages} from "../../../data/contants";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import {AdvanceInfo, CourseInfo} from "../../../@core/types";
import FileInputField from "../../../components/file-input"

const AdvanceInformation: FC = () => {
    const initialState :AdvanceInfo = {
        language: '',
        duration: '',
        description: ''
    }

    let prevFormState: CourseInfo | null = null;
    const storedFormData = localStorage.getItem('form-state');
    useEffect(() => {
        if (storedFormData !== null) {
            prevFormState = JSON.parse(storedFormData) as CourseInfo;
        }
    }, []);

    const [advanceInfoState, setAdvanceInfoForm] = useState<AdvanceInfo>(initialState);

    const navigate = useNavigate();
    function handleSaveOperation() {
        const payload = {
            ...prevFormState,
            advanceInformation: advanceInfoState
        };
        localStorage.setItem('form-state', JSON.stringify(payload))
        navigate('/course/create/faqs')
    }

    return (
        <form className="grid-view">
            <div className="col-span-2">
                <h2>Advance information</h2>
            </div>

            <div className="col-span-2">
                <hr/>
            </div>

            <FileInputField
                type="image"
                id="thumbnail-file"
                label="Course Thumbnail"
                iconLabel="Course Thumbnail"
                size="192*258px"
                btnLabel="Upload Image"
            >
                Upload your course Thumbnail here.
                <span className="font-bold">Important guidelines:</span>
                192x258 pixels or 32:43 Ratio. Supported format:
                <span className="font-bold">.jpg, .jpeg, or .png</span>
            </FileInputField>

            <FileInputField
                type="both"
                id="thumbnail-file"
                label="Course Overview"
                iconLabel="Course Overview "
                btnLabel="Upload Image/video"
            >
                Patients who watch a well-made promo video/meaningful picture are 5X more likely to build connection and trust with their doctors.
            </FileInputField>

            <div className="relative">
                <Label htmlFor="course-language">
                    Course Language
                </Label>
                <Select
                    id="course-language"
                    placeholder="Select..."
                    onChange={(e) => setAdvanceInfoForm({ ...advanceInfoState, language: e.target.value })}
                >
                    {languages.map(item => {
                        return (
                            <option
                                key={item}
                                value={item}
                            >{item}</option>
                        )
                    })}
                </Select>
            </div>

            <div className="relative">
                <Label htmlFor="course-duration">
                    Course Duration

                </Label>
                <Select
                    id="course-duration"
                    placeholder="Select..."
                    onChange={(e) => setAdvanceInfoForm({ ...advanceInfoState, duration: e.target.value })}
                >
                    {duration.map(item => {
                        return (
                            <option
                                key={item}
                                value={item}
                            >{item}</option>
                        )
                    })}
                </Select>
            </div>

            <div className="col-span-2">
                <InputWithOptions
                    isTextArea={true}
                    rows={6}
                    name="course-description"
                    value={advanceInfoState.description}
                    label="Course Desscription"
                    placeholder="Enter you course descriptions"
                    getInputValue={(val) => setAdvanceInfoForm({ ...advanceInfoState, description: val })}
                />
            </div>

            <div className="col-span-2">
                <hr/>
            </div>

            <div className="col-span-2 flex justify-between">
                <Link to="/course/create/basic-information">
                    <Button
                        color="gray"
                    >Previous</Button>
                </Link>
                <Button
                    color="primary"
                    onClick={() => handleSaveOperation()}
                >
                    Save & Next
                </Button>
            </div>
        </form>
    )
}

export default AdvanceInformation
