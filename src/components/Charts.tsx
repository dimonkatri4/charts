import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import { ChartData } from '../AppContainer'

ChartJS.register(...registerables)

interface Props {
    chartData: ChartData
    typeChart: string
}

function Charts({ chartData, typeChart }: Props) {
    return (
        <div className="chart">
            {typeChart === 'bar' && <Bar data={chartData} />}
            {typeChart === 'line' && <Line data={chartData} />}
        </div>
    )
}

export default Charts
