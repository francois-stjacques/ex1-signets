import './Page.scss';
// import Entete from './Entete';
// import PiedPage from './PiedPage';
// import Cadriciels from './Cadriciels';
import GestionDossier from './GestionDossier';
import {useState} from 'react';

export default function Page() {

    const objetCadre = useState({});

    return (
        <div className="Page">
        {/* <Entete> */}
            <section className="ctnPrincipal">
                <GestionDossier objetCadre={objetCadre}/>
            </section>
        {/* <PiedPage> */}
    </div>
    );
}