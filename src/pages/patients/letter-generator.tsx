import type { FC } from "react";
import NavbarSidebar from "../../layouts/navbar-sidebar";
import InputWithOptions from "../../components/input-with-options";
import {Link} from "react-router-dom";
import {Button, Checkbox, Label} from "flowbite-react";
import {useState} from "react";

const LetterGenerator: FC = function() {
    const [checkboxGroup, setFieldVisibilty] = useState({
        medicalHistory: true,
        medicationHistory: true,
        allergies: true,
        examination: true,
        diagnosis: true,
        management: true
    })
    return (
        <NavbarSidebar isFooter={false}>
            <div className="px-6 pt-6 pb-8">
                <section className="letter-generator-view bg-white dark:bg-gray-800 rounded-xl p-5">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Letter Generator for Medical Consultations
                    </h1>
                    <p>
                        Abdul Wahab | binarycase10@gmail.com
                    </p>

                    <hr className="-mx-5" />

                    <form className="flex flex-col gap-6 pt-6">
                        <div className="checkbox-group flex items-center gap-3.5">
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="medical-history-cb"
                                    checked={checkboxGroup.medicalHistory}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, medicalHistory: e.target.checked})}
                                />
                                <Label htmlFor="medical-history-cb" className="pb-0">Medical history</Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="medication-history-cb"
                                    checked={checkboxGroup.medicationHistory}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, medicationHistory: e.target.checked})}
                                />
                                <Label htmlFor="medication-history-cb" className="pb-0">Medication history</Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="allergies-cb"
                                    checked={checkboxGroup.allergies}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, allergies: e.target.checked})}
                                />
                                <Label htmlFor="allergies-cb" className="pb-0">Allergies</Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="examination-cb"
                                    checked={checkboxGroup.examination}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, examination: e.target.checked})}
                                />
                                <Label htmlFor="examination-cb" className="pb-0">Examination</Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="diagnosis-cb"
                                    checked={checkboxGroup.diagnosis}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, diagnosis: e.target.checked})}
                                />
                                <Label htmlFor="diagnosis-cb" className="pb-0">Diagnosis</Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    id="management-cb"
                                    checked={checkboxGroup.management}
                                    onChange={(e) => setFieldVisibilty({...checkboxGroup, management: e.target.checked})}
                                />
                                <Label htmlFor="management-cb" className="pb-0">Management</Label>
                            </div>
                        </div>


                        <InputWithOptions
                            type="text"
                            name="patient-full-name"
                            label="Full Name"
                            placeholder="User full name"
                            showInputCount={true}
                            maxLength={24}
                            getInputValue={() => {}}
                        />

                        <InputWithOptions
                            type="email"
                            name="patient-email"
                            label="Email*"
                            placeholder="binarycase10@gmail.com"
                            getInputValue={() => {}}
                        />

                        <InputWithOptions
                            type="text"
                            name="patient-symptoms"
                            label="Symptoms"
                            placeholder="User Symptoms"
                            isTextArea={true}
                            showInputCount={true}
                            maxLength={80}
                            rows={2}
                            getInputValue={() => {}}
                        />

                        {
                            checkboxGroup.medicalHistory &&
                            <InputWithOptions
                                type="text"
                                name="patient-history"
                                label="Medical History"
                                placeholder="User Medical History"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        {
                            checkboxGroup.medicationHistory &&
                            <InputWithOptions
                                type="text"
                                name="patient-med-history"
                                label="Medication History"
                                placeholder="User Medication History"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        {
                            checkboxGroup.allergies &&
                            <InputWithOptions
                                type="text"
                                name="patient-allergies"
                                label="Allergies"
                                placeholder="User Allergies"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        {
                            checkboxGroup.examination &&
                            <InputWithOptions
                                type="text"
                                name="patient-examination"
                                label="Examination"
                                placeholder="User Examination"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        {
                            checkboxGroup.diagnosis &&
                            <InputWithOptions
                                type="text"
                                name="patient-diagnosis"
                                label="Diagnosis"
                                placeholder="User diagnosis"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        {
                            checkboxGroup.management &&
                            <InputWithOptions
                                type="text"
                                name="patient-management"
                                label="Management"
                                placeholder="User Management"
                                isTextArea={true}
                                showInputCount={true}
                                maxLength={80}
                                rows={2}
                                getInputValue={() => {}}
                            />
                        }

                        <div className="flex justify-between">
                            <Link to="/patients">
                                <Button color="gray">Back</Button>
                            </Link>

                            <Button
                                color="primary"
                            >
                                Generate Letter
                            </Button>
                        </div>

                    </form>
                </section>
            </div>
        </NavbarSidebar>
    )
}

export default LetterGenerator
