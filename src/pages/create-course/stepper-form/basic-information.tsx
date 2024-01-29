import type { FC } from "react";
import {Label, Select, Button} from "flowbite-react";
import {useState} from "react";
import InputWithOptions from "../../../components/input-with-options";
import {useNavigate, Link} from "react-router-dom";
import {BasicInfo} from "../../../@core/types";


const BasicInformation: FC = () => {
    const teachList = [
        { id: 1, description: '' }
    ]
    const initialState :BasicInfo = {
        subject: '',
        title: '',
        category: '',
        teachingList: teachList
    }

    const [basicInfoFormState, setBasicInfoForm] = useState<BasicInfo>(initialState)
    // const testData = JSON.stringify({ id: 0, name: "test" })
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch('https://api.jsonbin.io/v3/b', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-Master-Key': '$2a$10$ukUpxVTMEfauzkdr8Q7wiO4idPTFcYTZ1mAN11RUAyW08X2wzG3Ea',
    //                 'X-Collection-Id': '65b282c9dc746540189aa01c'
    //             },
    //             body: testData
    //         })
    //             .then(response => {
    //                 return response.json()
    //             })
    //
    //         console.log('hhhh ', data);
    //     }
    //
    //     fetchData()
    // }, []);

    function addTeachItem() {
        const newItem = { id: basicInfoFormState.teachingList.length + 1, description: '' };
        setBasicInfoForm(prevState => ({
            ...prevState,
            teachingList: [...prevState.teachingList, newItem],
        }))
    }

    function updateTeachingItem(newDesc: string, id: number) {
        const updatedTeachingList = basicInfoFormState.teachingList.map(item =>
            item.id === id ? { ...item, description: newDesc } : item
        );

        setBasicInfoForm(prevState => ({
            ...prevState,
            teachingList: updatedTeachingList,
        }));
    }

    const navigate = useNavigate();
    function handleSaveOperation() {
        const payload = {
            basicInformation: basicInfoFormState
        };
        localStorage.setItem('form-state', JSON.stringify(payload))
        navigate('/course/create/advance-information')
    }

    return (
        <form>
            <h2>Basic information</h2>

            <hr />

            <InputWithOptions
                type="text"
                name="course-subject"
                label="Subject"
                value={basicInfoFormState.subject}
                showInputCount={true}
                maxLength={24}
                placeholder="Your course subject"
                getInputValue={(val) => setBasicInfoForm({ ...basicInfoFormState, subject: val })}
            />

            <InputWithOptions
                type="text"
                name="course-title"
                label="Title"
                value={basicInfoFormState.title}
                showInputCount={true}
                maxLength={50}
                placeholder="Your course title"
                getInputValue={(val) => setBasicInfoForm({ ...basicInfoFormState, title: val })}
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

            <hr />

            <div className="flex justify-between items-center">
                <h3>What you will teach in this course ({ basicInfoFormState.teachingList.length }/6)</h3>
                <span
                    onClick={addTeachItem}
                    className={`${basicInfoFormState.teachingList.length === 6 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-700 cursor-pointer'}`}
                >
                    + Add new
                </span>
            </div>
            {basicInfoFormState.teachingList.map((item, index) => {
                    return (
                            <InputWithOptions
                                key={item.id}
                                type="text"
                                name={`course-description-${index+1}`}
                                label={`0${index+1}.`}
                                value={item.description}
                                showInputCount={true}
                                maxLength={80}
                                placeholder="What you will teach in this course"
                                getInputValue={val => updateTeachingItem(val, item.id)}
                            />
                    )
                })
            }

            <div className="col-span-2 flex justify-between">
                <Link to="/">
                    <Button color="gray">Back</Button>
                </Link>
                <Button
                    color="primary"
                    className="ml-auto"
                    onClick={() => handleSaveOperation()}
                >
                    Save & Next
                </Button>
            </div>
        </form>
    )
}

export default BasicInformation
