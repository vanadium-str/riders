import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventsList: [],
    myRuns: [],
    myEvents: [],
    ridersList: [],
    spotsList: [],
    currentEvent: -1
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEventsList: (state, action) => {
            state.eventsList = action.payload
        },
        setMyRuns: (state, action) => {
            state.myRuns = action.payload
        },
        setMyEvents: (state, action) => {
            state.myEvents = action.payload
        },
        setRidersList: (state, action) => {
            state.ridersList = action.payload
        },
        setCurrentEvent: (state, action) => {
            state.currentEvent = action.payload
        },
    }
})

export const { setEventsList, setMyRuns, setMyEvents, setRidersList, setCurrentEvent } = eventsSlice.actions;

export default eventsSlice.reducer;