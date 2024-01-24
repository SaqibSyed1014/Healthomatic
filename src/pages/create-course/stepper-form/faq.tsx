import type { FC } from "react";
import {Button} from "flowbite-react";
import {useState} from "react";
import InputWithOptions from "../../../components/input-with-options";

const FAQ: FC = () => {
    const faqItem = { question: '', answer: '' };
    const [faqsList, setList] = useState([
        faqItem
    ])

    function addFaqItem() {
        setList([...faqsList, faqItem])
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
            {faqsList.map((_, index) => {
                return (
                    <div>
                        <InputWithOptions
                            type="text"
                            name={`course-question-${index+1}`}
                            label={`0${index+1}.`}
                            showInputCount={true}
                            maxLength={80}
                            placeholder="Add question here"
                        />

                        <InputWithOptions
                            isTextArea={true}
                            rows={2}
                            name={`course-question-${index+1}`}
                            showInputCount={true}
                            maxLength={80}
                            placeholder="Add answer here"
                            classes="pt-2"
                        />
                    </div>
                )
            })}

            <div className="flex justify-between">
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

export default FAQ
