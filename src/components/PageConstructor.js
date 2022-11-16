import React from 'react';
import { useSelector } from 'react-redux';
import { currentPageSelector } from '../redux/selectors';
import { myEvents, myRuns } from '../utils/constants';
import AllEvents from './events/AllEvents';
import MyEvents from './events/MyEvents';
import MyRuns from './events/MyRuns';

function PageConstructor() {

    const currentPage = useSelector(currentPageSelector);

    switch (currentPage) {
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