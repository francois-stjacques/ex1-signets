import './Page.scss';
// import Entete from './Entete';
// import PiedPage from './PiedPage';
import GestionDossier from './GestionDossier';
// import Cadriciels from './Cadriciels';
// import {useState} from 'react';

export default function Page() {

    return (
        <div className="Page">
        {/* <Entete> */}
            <section className="ctnPrincipal">
                <GestionDossier />
            </section>
        {/* <PiedPage> */}
    </div>
    );
}