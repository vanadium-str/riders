import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { ridersAppContext } from '../utils/context';
import { events, registration } from '../utils/constants';
import Registration from './login/Registration';
import PageConstructor from './PageConstructor';
import StartPage from './login/StartPage';
import FooterAdmin from './events/FooterAdmin';
import FooterUser from './events/FooterUser';

function SwitchPage() {
    
    const { admin } = useContext(ridersAppContext);

    return(
        <Routes>
            <Route path={`/${registration}`} element={<Registration/>} exact/>
            <Route path={`/${events}`} element={                
                    <div>
                        <PageConstructor/>
                        {admin ? <FooterAdmin/> : <FooterUser/>}
                    </div>}
                exact/>
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