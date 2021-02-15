import "./GestionDossier.scss";
import Dossier from "./Dossier";
import tabDossier from "./data/dossiers.json";

function GestionDossier(props) {
    return (
        <div className="GestionDossier">
            <h2>Liste des dossiers</h2>
            <ul>
                {tabDossier.map((dsr) => (
                    <Dossier
                    key={dsr.id}
                    id={dsr.id}
                    objetCadre={props.objetCadre}
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