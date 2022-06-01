import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {setFormData} from "../store/formDataSlice";
import {useAppDispatch} from "../hooks/redux";

const InputForm = () => {

    const dispatch = useAppDispatch()

    return (
        <div>
            <Formik
                initialValues={{
                    axisLabelsX: '',
                    axisLabelsY: '',
                    typeChart: 'bar'
                }}
                validationSchema={Yup.object({
                    axisLabelsX: Yup.string().required(),
                    axisLabelsY: Yup.string().required(),
                    typeChart: Yup.string().oneOf(['bar', 'line'])
                })}
                onSubmit={(formData) => {
                    const arrayX = formData.axisLabelsX.split(',').map(v => v.replace(/\s+/g, ''))
                    const arrayY = formData.axisLabelsY.split(',').filter(v => v !== '').map(Number)
                    const data = {
                        labelsX: arrayX,
                        labelsY: arrayY,
                        typeChart: formData.typeChart
                    }
                    dispatch(setFormData(data))
                }}
            >
                {formik => (
                <Form onBlur={() => formik.handleSubmit()}>
                    <div>
                        <label htmlFor='axisLabelsX'>X axis labels</label>
                        <Field name='axisLabelsX' type='text'/>
                        <ErrorMessage name="axisLabelsX"/>
                    </div>
                    <div>
                        <label htmlFor='axisLabelsY'>Y axis labels</label>
                        <Field name='axisLabelsY' type='text'/>
                        <ErrorMessage name="axisLabelsY"/>
                    </div>
                    <div onClick={() => formik.handleSubmit()}>
                        <label>
                            <Field type='radio' name='typeChart' value='bar'/>
                            Bar chart
                        </label>
                        <label>
                            <Field type='radio' name='typeChart' value='line'/>
                            Line chart
                        </label>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
};

export default InputForm;