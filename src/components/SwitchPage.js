import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { ridersAppContext } from '../utils/context';
import { events, joinFailure, joinSuccess, registration, waitingList } from '../utils/constants';
import Registration from './login/Registration';
import PageConstructor from './PageConstructor';
import StartPage from './login/StartPage';
import FooterAdmin from './events/FooterAdmin';
import FooterUser from './events/FooterUser';
import JoinSuccess from './events/JoinSuccess';
import JoinFailure from './events/JoinFailure';
import WaitingSuccess from './events/WaitingSuccess';

function SwitchPage() {
    
    const { admin, userId } = useContext(ridersAppContext);

    return(
        <Routes>
            <Route path={`/${registration}`} element={<Registration/>} exact/>
            <Route path={`/${events}`} element={userId === -1 ? 
                        <StartPage/>
                        : <div>
                            <PageConstructor/>
                            {admin ? <FooterAdmin/> : <FooterUser/>}
                        </div>}
                    exact/>
            <Route path={`/${joinSuccess}`} element={<JoinSuccess/>} exact/>
            <Route path={`/${joinFailure}`} element={<JoinFailure/>} exact/>
            <Route path={`/${waitingList}`} element={<WaitingSuccess/>} exact/>
            <Route path={`/`} element={<StartPage/>} exact/>
        </Routes>
    );
    // switch (page) {
    //     case registration:
    //         return(
    //             <Registration/>
    //         );
    //     case events:
    //         return (
    //             <div>
    //             <PageConstructor/>
    //             {admin ? <FooterAdmin/> : <FooterUser/>}
    //             </div>
    //         );
    //     default:
    //         return (
    //             <StartPage/>
    //         );
    // }
}

export default SwitchPage;