import React from 'react';
import App from './App';
import {useAppSelector} from "./hooks/redux";

const AppContainer = () => {
    const {labelsX, labelsY, typeChart} = useAppSelector(state => state.formData)

    const chartData = {
        labels: labelsX,
        datasets: [
            {
                label: "",
                data: labelsY,
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    }

    return <App typeChart={typeChart} chartData={chartData}/>
};

export interface ChartData {
    labels: string[]
    datasets:
        {
            label: string
            data: number[]
            backgroundColor?: string[]
            borderColor?: string
            borderWidth?: number
        }[]
}

export default AppContainer;