import './Dossier.scss';

export default function Dossier(props) {
    return(
        <li className="Dossier">
            <div className="image">
                <img src={'images/' + props.id + '.jpg'} alt={props.titre}/>
            </div>
            <div className="point">
                <h3>Nom : {props.titre}</h3>
                <p>Date : {props.date}</p>
                <button>...</button>
            </div>
        </li>
    )
}