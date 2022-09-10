import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { ridersAppContext } from '../utils/context';
import { aboutEvent, alreadyJoin, createEvent, createSpot, editPersonalData, errorPage, events, joinFailure, joinSuccess, personalArea, registration, unsubscribeSuccess, waitingList } from '../utils/constants';
import Registration from './login/Registration';
import PageConstructor from './PageConstructor';
import StartPage from './login/StartPage';
import FooterAdmin from './events/FooterAdmin';
import FooterUser from './events/FooterUser';
import JoinSuccess from './events/JoinSuccess';
import JoinFailure from './events/JoinFailure';
import WaitingSuccess from './events/WaitingSuccess';
import UnsubscribeSuccess from './events/UnsubscribeSuccess';
import AlreadyJoin from './events/AlreadyJoin';
import ErrorPage from './events/ErrorPage';
import PersonalData from './personalArea/PersonalData';
import EditPersonalData from './personalArea/EditPersonalData';
import AboutEvent from './events/AboutEvent';
import CreateEvent from './events/CreateEvent';
import CreateSpot from './events/CreateSpot';

function SwitchPage() {
    
    const { admin, userId, setUserId } = useContext(ridersAppContext);

    useEffect(() => {
        setUserId(JSON.parse(window.localStorage.getItem('userId')));
    }, []);

    return(
        <Routes>
            <Route path={`/${aboutEvent}/:idEvent`} element={<AboutEvent/>} exact/>
            <Route path={`/${createEvent}`} element={<CreateEvent/>} exact/>
            <Route path={`/${createSpot}`} element={<CreateSpot/>} exact/>
            <Route path={`/${registration}`} element={<Registration/>} exact/>
            <Route path={`/${events}`} element={userId == -1 ? 
                        <StartPage/>
                        : <div>
                            <PageConstructor/>
                            {admin ? <FooterAdmin/> : <FooterUser/>}
                        </div>}
                    exact/>
            <Route path={`/${joinSuccess}`} element={<JoinSuccess/>} exact/>
            <Route path={`/${joinFailure}`} element={<JoinFailure/>} exact/>
            <Route path={`/${waitingList}`} element={<WaitingSuccess/>} exact/>
            <Route path={`/${unsubscribeSuccess}`} element={<UnsubscribeSuccess/>} exact/>
            <Route path={`/${alreadyJoin}`} element={<AlreadyJoin/>} exact/>
            <Route path={`/${errorPage}`} element={<ErrorPage/>} exact/>
            <Route path={`/${personalArea}`} element={userId == -1 ? <StartPage/> : <PersonalData/>} exact/>
            <Route path={`/${editPersonalData}`} element={userId == -1 ? <StartPage/> : <EditPersonalData/>} exact/>
            <Route path={`/`} element={<StartPage/>} exact/>
        </Routes>
    );
}

export default SwitchPage;