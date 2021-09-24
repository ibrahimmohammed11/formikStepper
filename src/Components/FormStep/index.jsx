import React from "react";
import * as Yup from "yup"
import { FormikStepper, FormikStep, InputField } from "formik-stepper";
import { Field, ErrorMessage } from 'formik';

import Styles from "./style.module.css";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    date: Yup.string().required('Please enter your date of birth'),
    email: Yup.string().required('Please enter your email').email(),
    phone: Yup.number().required('Please enter your phone number'),
    school: Yup.string().required('Please enter your school name'),
    college: Yup.string().required('Please enter your college name'),
    courses: Yup.string().required('Please enter your courses you are interested in'),
    newEra: Yup.string().required("Required"),
    eLearning: Yup.string().required("Required"),
    likeCourses: Yup.string().required('Please enter courses you would like to be added'),
    rate: Yup.number().required('Please rate your experience with us from 1 to 10?'),
});



export const FormStepper = () => {

    const onSubmit = async (values, { setSubmitting }) => {
        setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className="container">
            <div className={Styles.formSt}>


                <FormikStepper
                    onSubmit={onSubmit}
                    initialValues={{
                        name: "",
                        date: "",
                        email: "",
                        phone: "",
                        school: "",
                        college: "",
                        courses: "",
                        newEra: '',
                        eLearning: '',
                        where: "",
                        likeCourses: '',
                        rate: 8,
                        comments: '',
                    }}
                    validationSchema={validationSchema}
                    labelsColor="#15bdee"
                    withStepperLine
                    nextBtnLabel="Next"
                    prevBtnLabel="Back"
                    submitBtnLabel="Submit"
                    nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
                    prevBtnColor="primary"
                    submitBtnColor="primary"
                >
                    {/*  First Step */}
                    <FormikStep
                        label="Personal Info"
                        withIcons="fa fa-user"
                        iconColor="white"
                        circleColor="#15bdee"
                    >
                        <InputField type="text" name="name" label="Your Name" placeholder="Your Name" className={`${Styles.inptSt} form-control`} />
                        <InputField type="date" name="date" label="Date of birth" placeholder="Date of birth" className={`${Styles.inptSt} form-control`} />
                        <InputField type="email" name="email" label="Your Email" placeholder="Your Email" className={`${Styles.inptSt} form-control`} />
                        <InputField type="number" name="phone" label="Your Phone Number" placeholder="Your Phone" className={`${Styles.inptSt} form-control`} />

                    </FormikStep>
                    {/*  Second Step */}
                    <FormikStep
                        label="Educational Info"
                        withIcons="fas fa-graduation-cap"
                        // withNumbers
                        iconColor="white"
                        circleColor="#15bdee"
                    >
                        <InputField type="text" name="school" label="Your School" placeholder="Your School" className={`${Styles.inptSt} form-control`} />
                        <InputField type="text" name="college" label="Your College" placeholder="Your College" className={`${Styles.inptSt} form-control`} />
                    </FormikStep>


                    {/*  Third Step */}
                    <FormikStep
                        label="Courses"
                        withIcons="fas fa-user-graduate"
                        // withNumbers
                        iconColor="white"
                        circleColor="#15bdee"
                    >
                        <InputField rows="10" type="textarea" name="courses" label="Courses you're interested in:" placeholder="Courses" className={`${Styles.inptSt} form-control`} />
                    </FormikStep>


                    {/* Fouth Step */}
                    <FormikStep
                        label="Review"
                        withIcons="far fa-comment-dots"
                        iconColor="white"
                        circleColor="#15bdee"
                    >
                        <div>
                            <div>
                                <div>Do you think online learning is the new Era?</div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="radio" name="newEra" value="yes" id="my-radio-group" />
                                    <label htmlFor="my-radio-group" className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="radio" name="newEra" value="no" id="my-radio-group1" />
                                    <label htmlFor="my-radio-group1" className="form-check-label">No</label>
                                </div>
                                <ErrorMessage name="newEra" component="div" className="alert-danger p-2 mt-1" />

                            </div>
                            <div>
                                <div>Have you ever Experienced E-Learning?</div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="radio" name="eLearning" value="yes" id="my-radio-group2" />
                                    <label htmlFor="my-radio-group2" className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check">
                                    <Field className="form-check-input" type="radio" name="eLearning" value="no" id="my-radio-group4" />
                                    <label htmlFor="my-radio-group3" className="form-check-label">No</label>
                                </div>
                            </div>
                            <InputField type="text" name="where" label="Where..?" placeholder="Where..?" className={`${Styles.inptSt} form-control`} />
                        </div>

                        <InputField type="text" name="likeCourses" label="What courses you would like to be added to the website?" placeholder="Courses you like" className={`${Styles.inptSt} form-control`} />
                        <InputField type="text" name="rate" label="Please rate your experience with us from 1 to 10?" placeholder="Rate" className={`${Styles.inptSt} form-control`} />
                        <InputField rows="5" name="comments" type="textarea" label="Extra comments" placeholder="Comments" className={`${Styles.inptSt} form-control`} />

                    </FormikStep>
                </FormikStepper>
            </div>
        </div>
    );
};