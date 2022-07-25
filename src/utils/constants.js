export const events = 'events';
export const registration = 'registration';
export const myEvents = 'myEvents';
export const myRuns = 'myRuns';
export const allEvents = 'allEvents';
export const createEvent = 'createEvent';
export const aboutEvent = 'aboutEvent';
export const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט',
        'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

export function dateFormatting(date, item){
        let dateFormat = new Date(item.time_start);
        date.push(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}`)
}

export function dateTorender(date){
        const week = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'];
        let array = date.split('/');
        let dateFormat = new Date(array[2], array[1].toString() - 1, array[0]);
        let day = week[dateFormat.getDay()];
        return `${array[0]}/${array[1]} ${day}'`;
}

export function timeToRender(date){
        let dateFormat = new Date(date);
        let minutes;
        if(dateFormat.getMinutes() < 10){
                minutes = '0' + dateFormat.getMinutes();
        }else{
                minutes = dateFormat.getMinutes();
        }
        return `${dateFormat.getHours()}:${minutes}`;
}

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