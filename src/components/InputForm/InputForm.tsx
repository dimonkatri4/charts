import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { setFormData } from '../../store/formDataSlice'
import { useAppDispatch } from '../../hooks/redux'
import { MyTextInput } from '../FormikFormsBuild/FormikFormsBuild'
import style from './inputForm.module.scss'

function InputForm() {
    const dispatch = useAppDispatch()

    return (
        <div>
            <Formik
                initialValues={{
                    axisLabelsX: '',
                    axisLabelsY: '',
                    typeChart: 'bar',
                }}
                validationSchema={Yup.object({
                    axisLabelsX: Yup.string().required('Enter a value for the X axis'),
                    axisLabelsY: Yup.string().required('Enter a value for the Y axis'),
                    typeChart: Yup.string().oneOf(['bar', 'line']),
                })}
                onSubmit={(formData) => {
                    const arrayX = formData.axisLabelsX.split(',').map((v) => v.replace(/\s+/g, ''))
                    const arrayY = formData.axisLabelsY
                        .split(',')
                        .filter((v) => v !== '')
                        .map(Number)
                    const data = {
                        labelsX: arrayX,
                        labelsY: arrayY,
                        typeChart: formData.typeChart,
                    }
                    dispatch(setFormData(data))
                }}
            >
                {(formik) => (
                    <Form
                        onBlur={() => formik.handleSubmit()}
                        className={style.form}
                        onKeyDown={(event) => {
                            event.key === 'Enter' && formik.handleSubmit()
                        }}
                    >
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                name="axisLabelsX"
                                type="text"
                                label="X axis labels"
                                placeholder="label1, label2, label3, ..."
                            />
                        </div>
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                label="Y axis labels"
                                type="text"
                                name="axisLabelsY"
                                placeholder="1, 2, 3, ..."
                            />
                        </div>
                        <div onClick={() => formik.handleSubmit()} className={style.changeType}>
                            <label>
                                <Field type="radio" name="typeChart" value="bar" />
                                Bar chart
                            </label>
                            <label>
                                <Field type="radio" name="typeChart" value="line" />
                                Line chart
                            </label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default InputForm
