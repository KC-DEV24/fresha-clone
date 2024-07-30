'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { emailRegex, fNameRegex, passwordRegex } from '../utils/validation';
import { countriesArray } from '../static/countryCode';
import { toast } from 'sonner';

const FormComp = () => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [countryCode, setcountryCode] = useState("+1");

    return (
        <Formik
            initialValues={{ fname: "", lname: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    setSubmitting(false)
                    // alert(JSON.stringify(values))
                    resetForm();
                }, 2000);
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                            <div className="input-wrapper">
                                <label htmlFor="fname" className='form-label'>First Name*</label>
                                <Field
                                    className={"form-control"}
                                    name={"fname"}
                                    type={"text"}
                                    validate={fNameRegex}
                                />
                                <ErrorMessage name="fname" component={"div"} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-wrapper">
                                <label htmlFor="lname" className='form-label'>Last Name</label>
                                <Field
                                    className={"form-control"}
                                    name={"lname"}
                                    type={"text"}
                                />
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="input-wrapper">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <Field
                                    className={"form-control"}
                                    name={"password"}
                                    type={"password"}
                                    validate={passwordRegex}

                                />
                                <ErrorMessage name="password" component={"div"} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="" className='form-label'>Phone Number</label>
                            <div className="input-wrapper d-flex gap-1">
                                <div className="coutry-code-wrapper">
                                    <span className='d-block form-control country-code-span' onClick={() => setIsOpen(!isOpen)} style={{ paddingRight: "40px" }}>{countryCode}</span>
                                    <div className={`country-box ${isOpen ? "d-block" : "d-none"}`}>
                                        <input value={inputValue} type="text" className='form-control mb-2' onChange={(e) => { setInputValue(e.target.value) }} placeholder='Search by code or name' />
                                        <ul>
                                            {
                                                countriesArray.filter(e => (e.phoneCode.toLowerCase().includes(inputValue.toLowerCase())) || (e.countryName.toLowerCase().includes(inputValue.toLowerCase()))).map((item, i) => (
                                                    <li onClick={() => {
                                                        setcountryCode(item.phoneCode)
                                                        setIsOpen(!isOpen)
                                                        setInputValue('')
                                                    }} key={i}>({item.phoneCode}) {item.countryName}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <input
                                    type="tel"
                                    className='form-control' f
                                    maxLength="11"
                                    minLength="8"
                                />

                                <Field
                                    name={"phoneNumber"}
                                    type={"phoneNumber"}
                                    hidden
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-wrapper">
                                <label htmlFor="" className='form-label'>Country</label>
                                <Field
                                    className={"form-control"}
                                    name={"country"}
                                    as="select">
                                    {
                                        countriesArray.map((item, i) => (
                                            <option key={i} value={item.countryName}>{item.countryName}</option>
                                        ))
                                    }
                                </Field>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-wrapper">
                                <label htmlFor="city" className='form-label'>City</label>
                                <Field
                                    className={"form-control"}
                                    name={"city"}
                                    type={"text"}
                                />
                            </div>

                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary w-100'>
                        {isSubmitting ? "Please Wait!" : "Continue"}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComp;