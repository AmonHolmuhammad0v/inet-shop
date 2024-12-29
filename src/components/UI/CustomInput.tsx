import React, { FC } from 'react'
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

interface ICustomInputProps {
    register: UseFormRegisterReturn,
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    label: string
    holder: string
    type: string
}

const CustomInput: FC<ICustomInputProps> = ({register, errors, label, holder, type}) => {
    return (
        <div className="enter__item">
            <label>
                <span className="enter__text">{label}</span>
                <input {...register} type={type} className="enter__input" placeholder={holder} />
                <p className="enter__error">{errors && <>{errors.message}</>}</p>
            </label>
        </div>
    )
}

export default CustomInput