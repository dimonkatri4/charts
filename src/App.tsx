import React from 'react'
import './App.css'
import BarChart from './components/BarChart'
import InputForm from "./components/InputForm";
import {ChartData} from "./AppContainer";
import Charts from "./components/Charts";

interface Props {
    typeChart: string,
    chartData: ChartData
}

function App({typeChart, chartData}:Props) {

    return (
        <div className="App">
            <div style={{ width: 700 }}>
                <InputForm />
                <Charts chartData={chartData} typeChart={typeChart} />
            </div>
        </div>
    )
}

export default App
