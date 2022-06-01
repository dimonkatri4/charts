import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    labelsX: string[]
    labelsY: number[]
    typeChart: string
}

const initialState: InitialState = {
    labelsX: [],
    labelsY: [],
    typeChart: ''
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<InitialState>) => {
            state = action.payload
        }
    }
})

export const setFormData = formDataSlice.actions

export default formDataSlice.reducer