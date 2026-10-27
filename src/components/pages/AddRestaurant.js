import React, { useState } from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from './Forms/FormComponents/TextInput/TextInput';

const schema = Yup.object({
    restaurantName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    cuisine: Yup.string().required("Required"),
    ownerName: Yup.string(),
    phone: Yup.string().matches(/^[0-9()+\-\s.]{7,20}$/, "Enter a valid phone number"),
    email: Yup.string().email("Invalid email address"),
    website: Yup.string().url("Enter a full URL, e.g. https://example.com"),
})

const initialValues = {
    restaurantName: "", address: "", cuisine: "", ownerName: "", phone: "", email: "", website: "",
}

const AddRestaurantPage = () => {
    const [submittedName, setSubmittedName] = useState(null)

    if (submittedName) {
        return (
            <div className="auth-wrap">
                <div className="panel">
                    <div className="form-alert success" role="status">
                        Thanks! You will be notified once {submittedName} is added.
                    </div>
                    <button className="btn-ghost" onClick={() => setSubmittedName(null)}>Add another restaurant</button>
                </div>
            </div>
        )
    }

    return (
        <div className="auth-wrap" style={{ maxWidth: 560 }}>
            <div className="panel">
                <h1>Add a restaurant</h1>
                <p className="muted">Tell us about the place so diners can start rating its dishes.</p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        // TODO: POST to the API once the endpoint exists.
                        setSubmittedName(values.restaurantName)
                        setSubmitting(false)
                    }}
                >
                    {({ isSubmitting, handleReset }) => (
                        <Form noValidate>
                            <TextInput label="Restaurant name" name="restaurantName" type="text" />
                            <TextInput label="Address" name="address" type="text" autoComplete="street-address" />
                            <TextInput label="Cuisine" name="cuisine" type="text" />
                            <TextInput label="Owner name (optional)" name="ownerName" type="text" />
                            <TextInput label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
                            <TextInput label="Email (optional)" name="email" type="email" autoComplete="email" />
                            <TextInput label="Website (optional)" name="website" type="url" placeholder="https://" />
                            <div className="d-flex gap-2">
                                <button className="btn-brand flex-fill" type="submit" disabled={isSubmitting}>Submit</button>
                                <button className="btn-ghost" type="button" onClick={handleReset}>Reset</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddRestaurantPage;
