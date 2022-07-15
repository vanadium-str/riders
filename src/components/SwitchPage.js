import React, {useContext, useEffect} from 'react';
import { ridersAppContext } from '../utils/context';
import { events, registration } from '../utils/constants';
import Registration from './login/Registration';
import PageConstructor from './PageConstructor';
import StartPage from './login/StartPage';
import FooterAdmin from './events/FooterAdmin';
import FooterUser from './events/FooterUser';

function SwitchPage() {

    const {page, admin} = useContext(ridersAppContext);

    switch (page) {
        case registration:
            return(
                <Registration/>
            );
        case events:
            return (
                <div>
                <PageConstructor/>
                {admin ? <FooterAdmin/> : <FooterUser/>}
                </div>
            );
        default:
            return (
                <StartPage/>
            );
    }
}

export default SwitchPage;