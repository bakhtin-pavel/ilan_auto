import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        year: [],
        country: [],
        from: 0,
        to: 999999999,
        page: 1,
    },
    reducers: {
        changeSearch: (state, action) => {
            state.search = action.payload
        },
        changeYears: (state, action) => {
            if (state.year.includes(action.payload)) {
                state.year = [...state.year].filter((item) => item !== action.payload)
            }
            else {
                state.year = [...state.year, action.payload]
            }
        },
        changeCountrys: (state, action) => {
            if (state.country.includes(action.payload)) {
                state.country = [...state.country].filter((item) => item !== action.payload)
            }
            else {
                state.country = [...state.country, action.payload]
            }
        },
        changeFrom: (state, action) => {
            state.from = action.payload
        },
        changeTo: (state, action) => {
            state.to = action.payload
        },
        changePages: (state, action) => {
            state.page = action.payload
        },
        clearAll: (state) => {
            state.year = []
            state.country = []
            state.from = 0
            state.to = 999999999
            state.page = 1
        },
    },
})

export const { changeYears, changeCountrys, changeFrom, changeTo, changePages, changeSearch, clearAll } = filterSlice.actions

export default filterSlice.reducer