export const userIdSelector = (state) => state.user.userId;
export const userAdminSelector = (state) => state.user.isAdmin;
export const userEmailSelector = (state) => state.user.email;
export const userPhoneSelector = (state) => state.user.phone;
export const userPassSelector = (state) => state.user.pass;
export const userPassRepeatSelector = (state) => state.user.passRepeat;
export const oldPassSelector = (state) => state.user.oldPass;
export const usernameSelector = (state) => state.user.username;
export const userDataSelector = (state) => state.user.userData;

export const eventsListSelector = (state) => state.events.eventsList;
export const myRunsSelector = (state) => state.events.myRuns;
export const myEventsSelector = (state) => state.events.myEvents;

export const dateSelector = (state) => state.eventsData.date;
export const dateEndSelector = (state) => state.eventsData.dateEnd;
export const driverSelector = (state) => state.eventsData.driver;
export const priceSelector = (state) => state.eventsData.price;