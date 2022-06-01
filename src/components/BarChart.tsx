import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

ChartJS.register(...registerables)


function BarChart() {
    return /*<Bar />*/
}

export default BarChart
