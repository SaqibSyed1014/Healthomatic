import type {FC, ReactNode} from "react";
import {PropsWithChildren} from 'react';
import {Button, Label} from "flowbite-react";

interface FileFieldProps {
    type: 'image' | 'video' | 'both'
    id: string
    label: string
    iconLabel: string
    btnLabel: string
    size?: string
    children: ReactNode
}

const FileInputField :FC<PropsWithChildren<FileFieldProps>> = ({
        type,
        id,
        label,
        iconLabel,
        btnLabel,
        size,
        children
    }) => {

    function fileConstraints() {
        if (type === 'image') return '.png,.jpg,.jpeg'
        else if (type === 'video') return 'video/mp4,video/x-m4v,video/*'
        else if (type === 'both') return 'image/*,video/*'
        return 'image/*,video/*'
    }

    return (
        <div>
            <Label htmlFor={id} value={label} />
                <div className="flex justify-center items-center gap-3 2xl:gap-4 py-6">
                    <div className="text-center h-[175px] w-[175px] 2xl:w-[200px] 2xl:h-[200px] shrink-0 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <span className="icon-upload-outline text-gray-500 dark:text-white text-xl"/>
                        <p className="text-gray-700 dark:text-white text-sm">
                            {iconLabel}<br />
                            {size && `(${size})`}
                        </p>
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
                                {btnLabel} <span className="icon-upload-outline ml-2"/>
                            </Button>
                        </div>
                    </div>
                </div>

                <input id={id} type="file" accept={fileConstraints()} className="hidden" />
        </div>
    )
}

export default FileInputField
