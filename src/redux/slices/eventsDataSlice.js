import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    date: '',
    dateEnd: '',
    driver: 'יתאן',
    price: '',
    minPlaces: 0,
    maxPlaces: 0,
    privacy: '',
    spotId: -1,
    trackLevel: [],
    spotName: '',
    coordinates: '',
}

export const eventsDataSlice = createSlice({
    name: 'eventsData',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.date = action.payload
        },
        setDateEnd: (state, action) => {
            state.dateEnd = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        resetAll: () => {
            return initialState
        }
    }
})

export const {
    setDate,
    setDateEnd,
    setPrice,
    resetAll
} = eventsDataSlice.actions;

export default eventsDataSlice.reducer;