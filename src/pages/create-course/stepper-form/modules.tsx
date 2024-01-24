import type { FC } from "react";
import {useState} from "react";
import {Button, Label, Modal, TextInput, Breadcrumb, FileInput, Dropdown} from "flowbite-react";
import { RxHamburgerMenu } from "react-icons/rx";
import InputWithOptions from "../../../components/input-with-options";

const HandleModuleContent :FC = () => {
    const contentOptions = [
        <span><span className="icon-heading mr-2" /> Heading</span>,
        <span><span className="icon-text-marker mr-2" /> Text (content)</span>,
        <span><span className="icon-link mr-2" /> Link</span>,
        <span><span className="icon-image-mockup mr-2" /> Image</span>,
        <span><span className="icon-play-video mr-2" /> Video</span>
    ]
    return (
        <>
            <form>
                <div className="flex justify-between items-center">
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item>Modules</Breadcrumb.Item>
                        <Breadcrumb.Item>Module Name</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="flex gap-2">
                        <Button color="gray">Previous</Button>
                        <Button
                            color="primary"
                        >
                            Save & Next
                        </Button>
                    </div>
                </div>

                <InputWithOptions
                    type="text"
                    label="Heading"
                    showInputCount={true}
                    showDeleteOption={true}
                    maxLength={80}
                    placeholder="Add heading here"
                />

                <InputWithOptions
                    label="Text"
                    isTextArea={true}
                    rows={2}
                    showInputCount={true}
                    showDeleteOption={true}
                    maxLength={800}
                    placeholder="Add content"
                />

                <InputWithOptions
                    type="text"
                    label="Link"
                    showInputCount={true}
                    showDeleteOption={true}
                    maxLength={80}
                    placeholder="Add link here"
                />

                <div>
                    <Label>Course Thumbnail</Label>
                    <div
                        className="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col justify-center items-center gap-3 px-4 py-6">
                            <div className="text-center">
                                <span className="icon-upload-outline text-gray-500 dark:text-white text-xl"/>
                                <p className="text-primary-700 dark:text-white">
                                    Upload Image
                                </p>
                            </div>
                            <div className="w-2/4 text-center">
                                <p className="mb-5 text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
                                    Upload your course Thumbnail here.
                                    <span className="font-bold">Important guidelines:</span>
                                    192x258 pixels or 32:43 Ratio. Supported format:
                                    <span className="font-bold">.jpg, .jpeg, or .png</span>
                                </p>
                            </div>
                        </div>
                        <FileInput id="dropzone-file" className="hidden" />
                    </div>
                </div>

                <div className="flex justify-center">
                   <Dropdown label="Add Content" color="lightPrimary" dismissOnClick={false} className="mx-auto">
                       {contentOptions.map(item => <Dropdown.Item>{item}</Dropdown.Item>)}
                   </Dropdown>
                </div>
            </form>
        </>
    )
}


const Modules: FC = () => {
    const moduleItem = { id: 1, name: '' };
    const [modulesList, setList] = useState([
        moduleItem
    ])

    const [openEditModal, setEditModal] = useState(false);
    const [openDeleteModal, setDeleteModal] = useState(false);
    const [showAddView, setAddView] = useState(false);

    function addFaqItem() {
        setList([...modulesList, moduleItem])
    }

    const DefaultView = <form>
        <h2>Modules</h2>

        <hr className="border-b border-r-gray-200"/>

        <div className="flex justify-between items-center">
            <h3>Modules ({modulesList.length}/10)</h3>
            <span
                onClick={addFaqItem}
                className={`${modulesList.length === 10 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-700 cursor-pointer'}`}
            >
                    <span className="icon-plus mr-2"/> Add new module
                </span>
        </div>
        <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-3 p-5">
            {modulesList.map(() => {
                return (
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg p-4">
                        <div className="flex items-center gap-3 text-gray-800 dark:text-white">
                            <RxHamburgerMenu className="cursor-pointer"/>
                            <p>Module Name</p>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-gray-500 dark:text-white">
                            <Button onClick={() => setAddView(true)} size="sm" color="lightPrimary">
                                Add Content <span className="icon-plus ml-2"/>
                            </Button>
                            <span onClick={() => setEditModal(true)} className="icon-edit cursor-pointer"></span>
                            <span onClick={() => setDeleteModal(true)} className="icon-trash-bin cursor-pointer"></span>
                        </div>
                    </div>
                )
            })}</div>

        <div className="flex justify-between">
            <Button color="gray">Previous</Button>
            <Button
                color="primary"
            >
                Save & Next
            </Button>
        </div>
    </form>

    return (
        <>
            {showAddView ? <HandleModuleContent /> : DefaultView}

            <Modal size="sm" dismissible show={openEditModal} onClose={() => setEditModal(false)}>
                <Modal.Header>Edit Module Name</Modal.Header>
                <Modal.Body className="pt-0">
                    <p className="text-gray-500 dark:text-white pb-4">Make sure it matches the content!</p>

                    <Label htmlFor="module-name">
                        Module Name
                    </Label>
                    <TextInput
                        type="text"
                        id="module-name"
                        name="module-name"
                        placeholder="Module Name"
                    />

                    <div className="flex justify-center gap-4 pt-5">
                        <Button color="failure" onClick={() => setEditModal(false)}>
                            {"Yes, I'm sure"}
                        </Button>
                        <Button color="gray" onClick={() => setEditModal(false)}>
                            No, cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal size="sm" dismissible show={openDeleteModal} onClose={() => setDeleteModal(false)}>
                <Modal.Header />
                <Modal.Body className="text-center">
                    <span className="icon-info-exclamation text-2xl text-gray-400 dark:text-gray-200"></span>
                    <h3 className="mb-5 text-base 2xl:text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">
                        Are you sure you want to delete the module? You can’t undo this action.
                    </h3>

                    <div className="flex justify-center gap-4 pt-5">
                        <Button color="failure" onClick={() => setDeleteModal(false)}>
                            {"Yes, I'm sure"}
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

export default Modules
