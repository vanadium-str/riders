import React, {useContext} from 'react';
import { ridersAppContext } from '../utils/context';
import { myEvents, createEvent, aboutEvent } from '../utils/constants';
import AllEvents from './events/AllEvents';
import MyEvents from './events/MyEvents';
import CreateEvent from './events/CreateEvent';
import AboutEvent from './events/AboutEvent';

function PageConstructor() {

    const {pageEvent} = useContext(ridersAppContext);

    switch (pageEvent) {
        case myEvents:
            return(
                <MyEvents/>
            );
        case createEvent:
            return(
                <CreateEvent/>
            );
        case aboutEvent:
            return(
                <AboutEvent/>
            );
        default:
            return (
                <AllEvents/>
            );
    }

}

export default PageConstructor;