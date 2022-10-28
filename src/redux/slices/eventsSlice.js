import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventsList: [],
    myRuns: [],
    myEvents: []
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
        }
    }
})

export const { setEventsList, setMyRuns, setMyEvents } = eventsSlice.actions;

export default eventsSlice.reducer;