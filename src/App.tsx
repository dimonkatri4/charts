import React from 'react'
import './App.css'
import InputForm from './components/InputForm/InputForm'
import { ChartData } from './AppContainer'
import Charts from './components/Charts'

interface Props {
    typeChart: string
    chartData: ChartData
}

function App({ typeChart, chartData }: Props) {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="title">Charts</div>
                <InputForm />
                <Charts chartData={chartData} typeChart={typeChart} />
            </div>
        </div>
    )
}

export default App
