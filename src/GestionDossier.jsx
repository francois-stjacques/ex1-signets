import "./GestionDossier.jsx";
import tabDossier from "./data/dossiers.json";
import Dossier from "./Dossier.jsx";

function GestionDossier(props) {
    return (
        <div className="GestionDossier">
            <ul>
                {tabDossier.map((dsr) => (
                    <Dossier
                    id={dsr.id}
                    titre={dsr.titre}
                    couleur={dsr.couleur}
                    date={dsr.date}
                    />
                ))}
            </ul>
        </div>
    )
}

export default GestionDossier;