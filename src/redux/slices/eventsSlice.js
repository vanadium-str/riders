import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventsList: ''
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEventsList: (state, action) => {
            state.eventsList = action.payload
        }
    }
})

export const { setEventsList } = eventsSlice.actions;

export default eventsSlice.reducer;