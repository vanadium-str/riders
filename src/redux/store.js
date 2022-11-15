import { compose, configureStore } from "@reduxjs/toolkit";
import { eventsDataSlice } from "./slices/eventsDataSlice";
import { eventsSlice } from "./slices/eventsSlice";
import { pageSlice } from "./slices/pageSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        events: eventsSlice.reducer,
        eventsData: eventsDataSlice.reducer,
        page: pageSlice.reducer,
    }
    }, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));