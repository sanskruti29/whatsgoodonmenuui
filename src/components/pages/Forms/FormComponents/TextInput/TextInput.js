import React, { useState } from "react";
import { useField } from "formik";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    const id = props.id || props.name;
    const invalid = meta.touched && meta.error;
    const isPassword = props.type === 'password';

    return (
        <div className={`field${invalid ? ' invalid' : ''}`}>
            <label htmlFor={id}>{label}</label>
            <div className="input-wrap">
                <input
                    id={id}
                    {...field}
                    {...props}
                    type={isPassword && show ? 'text' : props.type}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-describedby={invalid ? `${id}-error` : undefined}
                />
                {isPassword && (
                    <button type="button" className="btn-icon toggle-pw" onClick={() => setShow(!show)}
                        aria-label={show ? 'Hide password' : 'Show password'} aria-pressed={show}>
                        {show ? <FaEyeSlash aria-hidden="true"/> : <FaEye aria-hidden="true"/>}
                    </button>
                )}
            </div>
            {invalid ? <div className="field-error" id={`${id}-error`} role="alert">{meta.error}</div> : null}
        </div>
    );
};

export default TextInput;
