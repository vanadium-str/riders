export const events = 'events';
export const registration = 'registration';
export const myEvents = 'myEvents';
export const myRuns = 'myRuns';
export const createEvent = 'createEvent';
export const createSpot = 'createSpot';
export const aboutEvent = 'aboutEvent';
export const joinSuccess = 'joinSuccess';
export const joinFailure = 'joinFailure';
export const waitingList = 'waitingList';
export const unsubscribeSuccess = 'unsubscribe';
export const alreadyJoin = 'alreadyJoin';
export const errorPage = 'error';
export const personalArea = 'personalArea';
export const editPersonalData = 'editPersonalData';

const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט',
        'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
const week = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'];

export const URL = 'https://www.snowsolutions.me/api/';

export const phoneCodes = [ "050", "051", "052", "053", "054", "055", "056", "058", "059" ];

export function matchPhoneCodes(phone){
        for(let i = 0; i < phoneCodes.length; i++){
                if(phone.startsWith(phoneCodes[i])){
                        return true;
                }
        }
        return false;
}

export function dateFormatting(date, item){
        let dateFormat = new Date(item.time_start);
        date.push(`${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}`)
}

export function dateTorender(date){
        let array = date.split('/');
        let dateFormat = new Date(array[2], array[1].toString(), array[0]);
        let day = week[dateFormat.getDay()];
        return `${array[0]}/${+array[1] + 1} ${day}'`;
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

export function joinSuccessDate(date){
        let dateFormat = new Date(date);
        let time = timeToRender(date);
        let day = `${week[dateFormat.getDay()]}'`;
        let month = months[dateFormat.getMonth()];
        return `${day} ${dateFormat.getDate()} ל${month} ${time}`
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
}

let url = 'https://www.waze.com/ru/live-map/directions?to=ll.';
export function createLink(coordinates){
    let array = coordinates.split(', ');
    return url + array[0] + '%2C' + array[1];
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