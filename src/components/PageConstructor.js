import React, { useContext } from 'react';
import { ridersAppContext } from '../utils/context';
import { myEvents, myRuns } from '../utils/constants';
import AllEvents from './events/AllEvents';
import MyEvents from './events/MyEvents';
import MyRuns from './events/MyRuns';

function PageConstructor() {

    const { pageEvent } = useContext(ridersAppContext);

    switch (pageEvent) {
        case myEvents:
            return(
                <MyEvents/>
            );
        case myRuns:
            return(
                <MyRuns/>
            );
        default:
            return (
                <AllEvents/>
            );
    }
}

export default PageConstructor;