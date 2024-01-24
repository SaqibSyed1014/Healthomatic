import type { FC } from "react";
import {PropsWithChildren, useState} from 'react';
import {Label, Textarea, TextInput} from "flowbite-react";

interface FieldProps {
    type?: string
    name: string
    label?: string
    placeholder: string
    showInputCount?: boolean
    maxLength?: number
    showDeleteOption?: boolean
    isTextArea?: boolean
    rows?: number
    classes?: string
    onDelete?: () => void
}

const InputFieldWithLabelAndCount: FC<PropsWithChildren<FieldProps>> =
    function ({
          type,
          name,
          label,
          placeholder,
          maxLength,
          showInputCount,
          showDeleteOption,
          rows,
          isTextArea,
          classes,
          onDelete
    }) {
    const [inputValue, setInputValue] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = (event :any) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        setCharacterCount(newValue.length);
    };

    const baseClasses = [
        'relative',
        classes
    ]

    return (
        <div className={baseClasses.join(' ')}>
            {label && <Label htmlFor={name}>{label}</Label>}
            {isTextArea ?
                <Textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    rows={rows}
                />
                :
                <TextInput
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={maxLength}
                />
            }
            <div className="absolute right-3.5 bottom-2.5 text-gray-700 dark:text-white text-sm flex items-center gap-3">
                {showInputCount && <span className="input-count">{characterCount}/{maxLength}</span>}
                {showDeleteOption && <span onClick={onDelete} className="field-delete cursor-pointer"><span className="icon-trash-bin"/></span>}
            </div>
        </div>
    );
}

export default InputFieldWithLabelAndCount;
