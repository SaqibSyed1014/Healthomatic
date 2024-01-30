import type {FC, ReactNode} from "react";
import {useState} from "react";
import {Button, Label, Modal, Breadcrumb, Dropdown, Tooltip} from "flowbite-react";
// import { RxHamburgerMenu } from "react-icons/rx";
import InputWithOptions from "../../../components/input-with-options";
import {contentOptions} from "../../../data/contants";
import {useNavigate, useParams, Link} from "react-router-dom";
import FileInputField from "../../../components/file-input";

interface Module {
    id: number | null
    name: string
}


const Modules: FC = () => {
    const navigate = useNavigate();
    const moduleItem :Module = { id: 1, name: '' };
    const [modulesList, setList] = useState([
        moduleItem
    ])
    const [selectedModule, setSelectedModule] = useState<Module>({ id: null, name: '' })

    const [openEditModal, setEditModal] = useState(false);
    const [openDeleteModal, setDeleteModal] = useState(false);

    const [disableEditModal, setDisableEditModal] = useState(true);

    function addModuleItem() {   // add module item in the list
        if (modulesList.length < 10) {
            setList((prevModulesList) => {
                const lastItemId = prevModulesList.length > 0 ? prevModulesList[prevModulesList.length - 1]?.id : 0;
                const newModuleItem = {...moduleItem, id: lastItemId! + 1};
                return [...prevModulesList, newModuleItem];
            });
        }
    }
    function setSelectedModuleName(item :Module, type :string) {  // handler for module options
        setSelectedModule(item);
        type === 'edit' ? setEditModal(true) : setDeleteModal(true);
    }

    function openModuleContentView(item: Module) {  // open module content view of clicked module
        setSelectedModule(item);
        navigate(`/course/create/modules/${item.name}`)
    }

    const updateModuleName = () => {  // update module name
        setList((prevFields :any[]) => {
            const newFields = [...prevFields];
            return newFields.map((obj, index) => index + 1 === selectedModule.id ? selectedModule : obj)
        });
        setEditModal(false);
    }

    const removeModuleItem = () => {   // delete module item
        setList((prevFields :any[]) => {
            const newFields = [...prevFields];
            return newFields.filter((obj) => obj.id !== selectedModule.id);
        });
        setDeleteModal(false);
    }

    function handleSaveOperation() {
        navigate('/course/create/publish-course')
    }

    return (
        <>
            <form>
                <h2>Modules</h2>

                <hr className="border-b border-r-gray-200"/>

                <div className="flex justify-between items-center">
                    <h3>Modules ({modulesList.length}/10)</h3>
                    <span
                        onClick={addModuleItem}
                        className={`${modulesList.length === 10 ? 'text-gray-600 cursor-not-allowed' : 'text-blue-700 cursor-pointer'}`}
                    >
                    <span className="icon-plus mr-2"/> Add new module
                </span>
                </div>
                {
                    Boolean(modulesList.length) &&
                        <div className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-3 p-5">
                            {modulesList.map((item, index) => {
                                return (
                                    <div key={index} className="flex justify-between items-center bg-white dark:bg-gray-600 border border-gray-300 rounded-lg p-4">
                                        <div className="flex items-center gap-3 text-gray-800 dark:text-white">
                                            {/*<RxHamburgerMenu className="cursor-pointer text-gray-500 dark:text-gray-300"/>*/}
                                            <p>{item.name.length ? item.name : 'Module Name'}</p>
                                        </div>
                                        <div className="flex items-center gap-3 text-lg text-gray-500 dark:text-white">

                                            {
                                                item.name.length ?
                                                    <Button
                                                        onClick={() => openModuleContentView(item)} size="sm" color="lightPrimary"
                                                    >
                                                        Add Content <span className="icon-plus ml-2"/>
                                                    </Button>

                                                    :

                                                    <Tooltip content="Add module name first">
                                                        <Button
                                                            disabled={true}
                                                        >
                                                            Add Content <span className="icon-plus ml-2"/>
                                                        </Button>
                                                    </Tooltip>
                                            }


                                            <span
                                                onClick={() => setSelectedModuleName(item, 'edit')}
                                                className="icon-edit cursor-pointer hover:text-gray-600 dark:hover:text-gray-400"
                                            />
                                            <span
                                                onClick={() => setSelectedModuleName(item, 'delete')}
                                                className="icon-trash-bin cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                )
                            })}</div>
                }

                <div className="flex justify-between">
                    <Link to="/course/create/faqs">
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

            {/* Edit Module Modal  */}
            <Modal size="sm" dismissible show={openEditModal} onClose={() => setEditModal(false)}>
                <Modal.Header>{modulesList.filter(item => item.id === selectedModule.id)[0]?.name ? 'Edit':'Add'} Module Name</Modal.Header>
                <Modal.Body className="pt-0">
                    <p className="text-gray-500 dark:text-white pb-4">Make sure it matches the content!</p>

                    <Label htmlFor="module-name">
                        Module Name
                    </Label>
                    <InputWithOptions
                        type="text"
                        name="module-name"
                        value={selectedModule.name}
                        placeholder="Module Name"
                        showInputCount={true}
                        maxLength={24}
                        avoidSlash={true}
                        getErrorState={(e) => setDisableEditModal(e)}
                        getInputValue={(e) => setSelectedModule({ ...selectedModule, name: e})}
                    />

                    <div className="flex justify-center gap-4 pt-5">
                        <Button
                            color="primary"
                            disabled={disableEditModal || !selectedModule.name.length}
                            onClick={() => updateModuleName()}
                        >
                            Yes, I'm sure {disableEditModal}
                        </Button>
                        <Button color="gray" onClick={() => setEditModal(false)}>
                            No, cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Delete Module Modal  */}
            <Modal size="sm" dismissible show={openDeleteModal} onClose={() => setDeleteModal(false)}>
                <Modal.Header />
                <Modal.Body className="text-center">
                    <span className="icon-info-exclamation text-2xl text-gray-400 dark:text-gray-200"></span>
                    <h3 className="mb-5 text-base 2xl:text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">
                        Are you sure you want to delete the module? You can’t undo this action.
                    </h3>

                    <div className="flex justify-center gap-4 pt-5">
                        <Button color="failure" onClick={() => removeModuleItem()}>
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


const HandleModuleContent :FC = () => {
    const params= useParams();
    const [fieldsList, setFieldList] = useState([
        {
            type: 'heading',
            value: ''
        },
        {
            type: 'text',
            value: ''
        },
        {
            type: 'link',
            value: ''
        },
        {
            type: 'image',
            value: ''
        },
        {
            type: 'video',
            value: ''
        }
    ])

    function addFieldElement(id :string) {
        setFieldList([...fieldsList, { type: id, value: '' }])
    }

    function removeFieldElement(index :number) {
        setFieldList((prevFieldsList) => {
            const newFieldsList = [...prevFieldsList];
            newFieldsList.splice(index, 1);
            return newFieldsList;
        })
    }

    function renderFields(id :string, index: number) {
        let field :ReactNode | null = null
        if (id === 'heading') {
            field = <InputWithOptions
                key={index}
                type="text"
                name={`module-heading-${index}`}
                label="Heading"
                showInputCount={true}
                showDeleteOption={true}
                maxLength={80}
                placeholder="Add heading here"
                onDelete={() => removeFieldElement(index)}
            />
        }
        else if (id === 'text') {
            field = <InputWithOptions
                key={index}
                label="Text"
                name={`module-text-${index}`}
                isTextArea={true}
                rows={2}
                showInputCount={true}
                showDeleteOption={true}
                maxLength={800}
                placeholder="Add content"
                onDelete={() => removeFieldElement(index)}
            />
        }
        else if (id === 'link') {
            field = <InputWithOptions
                key={index}
                type="text"
                name={`module-link-${index}`}
                label="Link"
                hasLink={true}
                showInputCount={true}
                showDeleteOption={true}
                maxLength={80}
                placeholder="Add link here"
                onDelete={() => removeFieldElement(index)}
            />
        }
        else if (id === 'image') {
            field = <FileInputField
                key={index}
                type="image"
                id={`module-image-${index}`}
                label="Image"
                iconLabel="Upload Image"
                showDeleteOption={true}
                rowView={true}
                onDelete={() => removeFieldElement(index)}
            >
                Upload your course Thumbnail here.
                <span className="font-bold"> Important guidelines:</span>
                192x258 pixels or 32:43 Ratio. Supported format:
                <span className="font-bold">.jpg, .jpeg, or .png</span>
            </FileInputField>
        }
        else if (id === 'video') {
            field = <FileInputField
                key={index}
                type="video"
                id={`module-video-${index}`}
                label="Video"
                iconLabel="Upload Video"
                showDeleteOption={true}
                rowView={true}
                onDelete={() => removeFieldElement(index)}
            >
                Patients who watch a well-made promo video/meaningful picture are 5X more likely to build connection and trust with their doctors.
            </FileInputField>
        }

        return field
    }


    return (
        <>
            <form>
                <div className="flex justify-between items-center">
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item>
                            <Link to="/course/create/modules" className="text-gray-700 dark:text-gray-400">Modules</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <span className="text-gray-900 dark:text-gray-300">
                                {params['moduleName']}
                            </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="flex gap-2">
                        <Link to="/course/create/modules">
                            <Button color="gray">Previous</Button>
                        </Link>
                        <Button
                            color="primary"
                        >
                            Save & Next
                        </Button>
                    </div>
                </div>

                {fieldsList.map((item, index) => {
                    return (
                        <div key={index}>
                            {renderFields(item.type, index)}
                        </div>
                    )
                })}

                <div className="flex justify-center">
                   <Dropdown label="Add Content" color="lightPrimary" dismissOnClick={false} className="mx-auto">
                       {contentOptions.map(item => {
                           return (
                               <Dropdown.Item key={item.id} onClick={() => addFieldElement(item.id)}>
                                   {item.element}
                               </Dropdown.Item>
                           )
                       })}
                   </Dropdown>
                </div>
            </form>
        </>
    )
}


export { Modules, HandleModuleContent }
