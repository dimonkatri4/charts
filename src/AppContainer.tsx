import React from 'react'
import App from './App'
import { useAppSelector } from './hooks/redux'

function AppContainer() {
    const { labelsX, labelsY, typeChart } = useAppSelector((state) => state.formData)

    const chartData = {
        labels: labelsX,
        datasets: [
            {
                label: 'Input data',
                data: labelsY,
                backgroundColor: ['#2a71d0'],
                borderColor: 'black',
                borderWidth: 2,
            },
        ],
    }

    return <App typeChart={typeChart} chartData={chartData} />
}

export interface ChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor?: string[]
        borderColor?: string
        borderWidth?: number
    }[]
}

export default AppContainer
