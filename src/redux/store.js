import { compose, configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./slices/eventsSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        events: eventsSlice.reducer
    }
    }, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));