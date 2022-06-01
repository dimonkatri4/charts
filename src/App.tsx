import React from 'react'
import './App.css'
import BarChart from './components/BarChart'
import InputForm from "./components/InputForm";

function App() {

    return (
        <div className="App">
            <div style={{ width: 700 }}>
                <BarChart />
                <InputForm />
            </div>
        </div>
    )
}

export default App
