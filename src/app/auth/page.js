'use client'
import FormComp from '@/app/auth/Form'
import React, { useState } from 'react'
import BackwardBtn from '../components/BackwardBtn'
import "@/app/styles/scss/pages/auth.scss"
import Link from 'next/link'
import Image from 'next/image'
import { SignInWithGoogle } from '../utils/auth'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { emailRegex } from '../utils/validation';

const Auth = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [emailInputValue, setEmailInputValue] = useState("");
    const loginWithGoogle = () => {
        SignInWithGoogle().then(res => {
            setIsNewUser(true)
        }).catch(err => {
            console.log(err, "ERROR")
        })
    }
    return (
        <>
            <section className="auth-sec p-0 overflow-hidden">
                <div className="content-wrapper">
                    <BackwardBtn backwardLink={'/user-flow'}/>
                    <div style={{ maxWidth: '865px' }} className='mx-auto w-100'>
                        <h1 className="h3 font-gilroy-semibold text-center">Cora For Customers</h1>
                        <p className="lead text-center mb-3">{setIsNewUser ? "Create an account or log in to book and manage your appointments." : "You're almost there! Create your new account for info@skysys.com by completing these details"}</p>
                        {isNewUser ?
                            <FormComp /> : <>
                                <div className="d-flex gap-2 flex-wrap mb-3">
                                    <button className="btn btn-social d-flex gap-2 align-items-center">
                                        <Image src={'/img/icons/facebook-icon.svg'} width={27} height={27} alt='facebook-icon' />
                                        Continue with Facebook
                                    </button>
                                    <button className="btn btn-social d-flex gap-2 align-items-center" onClick={loginWithGoogle}>
                                        <Image src={'/img/icons/google-icon.svg'} width={27} height={27} alt='facebook-icon' />
                                        Continue with Google
                                    </button>
                                    <button className="btn btn-social d-flex gap-2 align-items-center">
                                        <Image src={'/img/icons/apple-icon.svg'} width={22} height={27} alt='facebook-icon' />
                                        Continue with Apple
                                    </button>
                                </div>
                                <div className="custom-hr text-center mb-3">Or</div>
                                <Formik
                                    initialValues={{ fname: "", lname: "", email: "", password: "" }}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setTimeout(() => {
                                            setSubmitting(false)
                                            resetForm();
                                        }, 2000);
                                    }}
                                >
                                    {({ errors, touched, isSubmitting }) => (
                                        <Form>
                                            <div className="input-wrapper mb-2">
                                                <Field
                                                    className={"form-control"}
                                                    name={"email"}
                                                    type={"email"}
                                                    validate={emailRegex}
                                                    placeholder="Enter your email address"
                                                />
                                                <ErrorMessage name="email" component={"div"} />
                                            </div>
                                            <button type="submit" className='btn btn-primary w-100'>
                                                {isSubmitting ? "Please Wait!" : "Continue"}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </>}
                    </div>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                        <Link href={'/'} className="d-flex align-items-center gap-1 text-gray-2">
                            <Image src={'/img/icons/language-globe-icon.svg'} width={20} height={20} alt='globe-icon' />
                            <span className="d-block">English</span>
                        </Link>
                        <Link href={'/'} className="d-flex align-items-center gap-1 text-gray-2">
                            <Image src={'/img/icons/support-gear-icon.svg'} width={20} height={20} alt='globe-icon' />
                            <span className="d-block">Support</span>
                        </Link>
                    </div>
                </div>
                <div className="obj obj-1"></div>
                <div className="obj obj-2"></div>
                <div className="obj obj-3"></div>
            </section>

        </>
    )
}

export default Auth