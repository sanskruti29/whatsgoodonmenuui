import React from "react";
import {useField } from "formik";

const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div>
            <label className="checkbox">
                <input {...field} {...props} type = "checkbox" />
                {children}
            </label>
                {meta.touched && meta.error ? (
                    <div className = "error">{meta.error}</div>
                ) : null}
        </div>
    );
};

export default CheckBox;