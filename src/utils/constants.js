export const events = 'events';
export const registration = 'registration';
export const myEvents = 'myEvents';
export const createEvent = 'createEvent';
export const week = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'];
export const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט',
        'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

// export function swap(items, firstIndex, secondIndex){
//     const temp = items[firstIndex];
//     items[firstIndex] = items[secondIndex];
//     items[secondIndex] = temp;
// }

// export function bubbleSort (arrayOfEvents) {
//     let length = arrayOfEvents.length;
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (new Date(arrayOfEvents[j + 1].time_start).getTime() < new Date(arrayOfEvents[j].time_start).getTime()) {
//                 swap(arrayOfEvents, j + 1, j);
//             }
//         }
//     }
// }