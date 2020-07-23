import React from "react";
import {useField } from "formik";
import "../AllForms/Styles.css"

const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <div className="group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input inputAreaStyle" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null }
        </div>
    );
};

export default TextInput;