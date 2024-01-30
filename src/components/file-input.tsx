import type {FC, ReactNode} from "react";
import {useState} from 'react';
import {Button, Label} from "flowbite-react";

interface FileFieldProps {
    type: 'image' | 'video' | 'both'
    id: string
    label: string
    value: string
    iconLabel: string
    btnLabel?: string
    size?: string
    rowView?: boolean
    showDeleteOption?: boolean
    onDelete?: () => void
    children: ReactNode
    getInputValue: (val :string) => void
}

const FileInputField: FC<FileFieldProps> = ({
        type,
        id,
        label,
        value,
        iconLabel,
        btnLabel,
        size,
        rowView,
        showDeleteOption,
        onDelete,
        children,
        getInputValue
    }) => {
    const [selectedFile, setFile] = useState<File | null>(null);
    const [previewFile, setPreview] = useState<string>(value || '');

    const fileConstraints = () => {
        if (type === 'image') return '.png,.jpg,.jpeg';
        else if (type === 'video') return 'video/mp4,video/x-m4v,video/*';
        else if (type === 'both') return 'image/*,video/*';
        return 'image/*,video/*';
    };

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = event?.target?.files?.[0];
        if (fileInput) {
            setFile(fileInput);
            const previewUrl = URL.createObjectURL(fileInput);
            setPreview(previewUrl);
            getInputValue(previewUrl);
            console.log(selectedFile)
        }
    };

    const removePreview = () => {
        setFile(null);
        setPreview('');
    };

    const renderFileContent = () => {
        if (!previewFile.length) {
            return (
                <div className="flex flex-col justify-center items-center gap-3 px-4 py-10">
                    <div className="text-center">
                        <span className="icon-upload-outline text-gray-500 dark:text-white text-xl" />
                        <p
                            className="cursor-pointer text-primary-700 dark:text-primary-500"
                            onClick={() => document.getElementById(id)?.click()}
                        >
                            {iconLabel}
                        </p>
                    </div>
                    <div className="w-1/2 text-center">
                        <p className="mb-5 text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
                            {children}
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div className="relative w-fit mx-auto my-4 group">
                {type === 'video' && (
                    <div className="w-3/4 h-[250px] mx-auto">
                        <video className="w-full h-full object-contain">
                            <source src={previewFile || ''} />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                )}
                {type === 'image' && (
                    <div className="w-[200px] h-[200px]">
                        <img src={previewFile || ''} alt="Selected File" className="w-full h-full object-contain" />
                    </div>
                )}
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl text-gray-700 hidden group-hover:flex gap-2">
                    <div
                        className="bg-gray-300 rounded w-9 h-9 shadow-xl flex items-center justify-center cursor-pointer"
                        onClick={() => document.getElementById(id)?.click()}
                    >
                        <span className="icon-edit"/>
                    </div>
                    <div
                        className="bg-gray-300 rounded w-9 h-9 shadow-xl flex items-center justify-center cursor-pointer hover:text-red-600"
                        onClick={removePreview}
                    >
                        <span className="icon-trash-bin" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Label htmlFor={id} value={label} />

            {rowView ? (
                <div className="relative rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 dark:bg-gray-700">
                    {renderFileContent()}
                    <input
                        id={id}
                        type="file"
                        accept={fileConstraints()}
                        onChange={(e) => handleFileSelection(e)}
                        className="hidden"
                    />

                    {Boolean(showDeleteOption) && (
                        <span
                            onClick={onDelete}
                            className="icon-trash-bin absolute right-3.5 bottom-2.5 text-gray-700 dark:text-white text-sm"
                        />
                    )}
                </div>
            ) : (
                <div key={previewFile} className="flex justify-center items-center gap-3 2xl:gap-4">
                    <div className="flex text-center h-[175px] w-[175px] 2xl:w-[200px] 2xl:h-[200px] shrink-0 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        {Boolean(previewFile.length) && (
                            <img key={previewFile} src={previewFile} alt="Selected File" className="w-full h-full object-contain" />
                        )}
                        {!previewFile && (
                            <div
                                className="flex flex-col grow items-center justify-center cursor-pointer"
                                onClick={() => document.getElementById(id)?.click()}
                            >
                                <span className="icon-upload-outline text-gray-500 dark:text-white text-xl" />
                                <p className="text-gray-700 dark:text-white text-sm">
                                    {iconLabel}<br />
                                    {size && `(${size})`}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-7">
                        <p className="mb-5 text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
                            {children}
                        </p>
                        <div>
                            <Button
                                size="sm"
                                color="lightPrimary"
                                onClick={() => document.getElementById(id)?.click()}
                            >
                                {btnLabel} <span className="icon-upload-outline ml-2" />
                            </Button>
                        </div>
                    </div>
                    <input
                        id={id}
                        type="file"
                        accept={fileConstraints()}
                        onChange={(e) => handleFileSelection(e)}
                        className="hidden"
                    />
                </div>
            )}
        </div>
    );
}

export default FileInputField;
