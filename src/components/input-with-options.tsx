import type { FC } from "react";
import {PropsWithChildren, useState} from 'react';
import {Label, Textarea, TextInput} from "flowbite-react";

interface FieldProps {
    type?: string
    name: string
    label?: string
    value: string
    placeholder: string
    showInputCount?: boolean
    maxLength?: number
    hasLink?: boolean
    showDeleteOption?: boolean
    isTextArea?: boolean
    rows?: number
    classes?: string
    getInputValue: (val :string) => void
    onDelete?: () => void
}

const InputFieldWithLabelAndCount: FC<PropsWithChildren<FieldProps>> =
    function ({
          type,
          name,
          label,
          value,
          placeholder,
          maxLength,
          hasLink,
          showInputCount,
          showDeleteOption,
          rows,
          isTextArea,
          classes,
          getInputValue,
          onDelete
    }) {
    const [inputValue, setInputValue] = useState(value || '');
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = (event :any) => {
        const newValue = event.target.value;
        if (showInputCount) setCharacterCount(newValue.length);
        if (hasLink) validateLinks();
        setInputValue(newValue);
        getInputValue(newValue);
    };

    const [showError, setError] = useState(false);
    function validateLinks() {
        const linkRegex = /^(https?|ftp):\/\/(www\.)?[^\s/$.?#]+\.(com|edu|gov|org|tech)(\/[^\s]*)?$|^www\.[^\s/$.?#]+\.(com|edu|gov|org|tech)(\/[^\s]*)?$/;
        if (!linkRegex.test(inputValue)) {
            setError(true)
        } else setError(false)
    }

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
                    value={inputValue}
                    placeholder={placeholder}
                    rows={rows}
                    onChange={handleInputChange}
                />
                :
                <TextInput
                    type={type}
                    id={name}
                    name={name}
                    value={inputValue}
                    color={showError && inputValue ? 'failure' : 'gray'}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={handleInputChange}
                />
            }
            <div className="absolute right-3.5 bottom-2.5 text-gray-700 dark:text-white text-sm flex items-center gap-3">
                {showInputCount && <span className="input-count">{characterCount}/{maxLength}</span>}
                {showDeleteOption && <span onClick={onDelete} className="field-delete">
                    <span className="icon-trash-bin"/></span>}
            </div>
        </div>
    );
}

export default InputFieldWithLabelAndCount;
