export const userIdSelector = (state) => state.user.userId;
export const userAdminSelector = (state) => state.user.isAdmin;
export const eventsListSelector = (state) => state.events.eventsList;
export const myRunsSelector = (state) => state.events.myRuns;
export const myEventsSelector = (state) => state.events.myEvents;