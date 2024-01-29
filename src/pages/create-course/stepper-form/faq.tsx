import type {FC} from "react";
import {useState} from "react";
import {Button} from "flowbite-react";
import InputWithOptions from "../../../components/input-with-options";
import {useNavigate, Link} from "react-router-dom";
import {CourseInfo, FaqsList} from "../../../@core/types";

interface FaqItem {
    question: string
    answer: string
}

const FAQ: FC = () => {
    let prevFormState: CourseInfo | null = null;
    const storedFormData = localStorage.getItem('form-state');
    if (storedFormData !== null) {
        prevFormState = JSON.parse(storedFormData) as CourseInfo;
    }

    const faqItem: FaqItem = { question: '', answer: '' };
    const [faqsList, setList] = useState<FaqsList>([
        faqItem
    ])

    function addFaqItem() {
        setList([...faqsList, faqItem])
    }

    const navigate = useNavigate();
    function handleSaveOperation() {
        const payload = {
            ...(prevFormState as CourseInfo),
            faqsList: faqsList
        };
        localStorage.setItem('form-state', JSON.stringify(payload))
        navigate('/course/create/modules')
    }

    function updateFaqItem(val: string, itemIndex: number, type :string) {
        setList((prevState) => {
            return prevState.map((item, index) => {
                if (index === itemIndex) {
                    return type === 'question' ? {...item, question: val} : {...item, answer: val};
                }
                return item;
            })
        });
    }

    return (
        <form>
            <h2>Frequently Asked Questions</h2>

            <hr className="border-b border-r-gray-200" />


            <div className="flex justify-between items-center">
                <h3>FAQs ({ faqsList.length }/4)</h3>
                <span
                    onClick={addFaqItem}
                    className={`${faqsList.length === 4 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-700 cursor-pointer'}`}
                >
                    + Add new
                </span>
            </div>
            {faqsList.map((item, index) => {
                return (
                    <div key={index}>
                        <InputWithOptions
                            type="text"
                            value={item.question}
                            name={`course-question-${index+1}`}
                            label={`0${index+1}.`}
                            showInputCount={true}
                            maxLength={80}
                            placeholder="Add question here"
                            getInputValue={val => updateFaqItem(val, index, 'question')}
                        />

                        <InputWithOptions
                            isTextArea={true}
                            rows={2}
                            value={item.answer}
                            name={`course-question-${index+1}`}
                            showInputCount={true}
                            maxLength={120}
                            placeholder="Add answer here"
                            classes="pt-2"
                            getInputValue={val => updateFaqItem(val, index, 'answer')}
                        />
                    </div>
                )
            })}

            <hr />

            <div className="flex justify-between">
                <Link to="/course/create/advance-information">
                    <Button color="gray">Previous</Button>
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

export default FAQ
