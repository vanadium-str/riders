import React, {useContext} from 'react';
import { ridersAppContext } from '../utils/context';
import { myEvents, createEvent } from '../utils/constants';
import AllEvents from './events/AllEvents';
import MyEvents from './events/MyEvents';
import CreateEvent from './events/CreateEvent';

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
        default:
            return (
                <AllEvents/>
            );
    }

}

export default PageConstructor;