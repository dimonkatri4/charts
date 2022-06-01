import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, registerables} from 'chart.js'
import {useAppSelector} from "../hooks/redux";

ChartJS.register(...registerables)


function BarChart() {
    const {labelsX, labelsY, typeChart} = useAppSelector(state => state.formData)

    const chartData = {
        labels: labelsX,
        datasets: [
            {
                label: "Users Gained",
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

    return <div>
        <Bar data={chartData} />
    </div>
}

export default BarChart
