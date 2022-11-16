import { createSlice } from "@reduxjs/toolkit"
import { events } from "../../utils/constants"

const initialState = {
    currentPage: events
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers : {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    }
})

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;