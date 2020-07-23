import React from "react"
import {useField } from "formik"
import StyledSelect from '../JS_Styles/StyledSelect'
import StyledLabel from '../JS_Styles/StyledLabel'
// import StyledErrorMessage from '../JS_Styles/StyledErrorMessage'

const SelectBox = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
                {/* {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                ) : null} */}
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
        </>
    );
};

export default SelectBox;