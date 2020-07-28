import React from "react";
import {useField } from "formik";
import "./styles.css"
import StyledErrorMessage from '../../JS_Styles/StyledErrorMessage'

const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <div className="group">
        <div className="field">
            <input className="inputAreaStyle inputAnimation" {...field} {...props} />   
            <label className="labelAnimation" htmlFor={props.id || props.name}>{label}</label>
        </div>
            {/* {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null } */}

            {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                ) : null}
        </div>
    );
};

export default TextInput;