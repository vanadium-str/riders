import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { ridersAppContext } from '../utils/context';
import { myEvents, createEvent, aboutEvent } from '../utils/constants';
import AllEvents from './events/AllEvents';
import MyEvents from './events/MyEvents';
import CreateEvent from './events/CreateEvent';
import AboutEvent from './events/AboutEvent';

function PageConstructor() {

    const { pageEvent } = useContext(ridersAppContext);

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

    // return(
    //     <Routes>
    //         <Route path={`/${myEvents}`} element={<MyEvents/>} exact/>
    //         <Route path={`/${createEvent}`} element={<CreateEvent/>} exact/>
    //         <Route path={`/${aboutEvent}`} element={<AboutEvent/>} exact/>
    //         <Route path={`/${events}`} element={<AllEvents/>} exact/>
    //     </Routes>
    // );
}

export default PageConstructor;