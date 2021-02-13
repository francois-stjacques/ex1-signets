import './Dossier.scss';

export default function Dossier(props) {
    return(
        <li className="Dossier">
            <div className="image">
                <img src= {'src/images/' + props.id + 'jpg'} alt={props.titre}/>
            </div>
            <div className="point">

            </div>
        </li>
    )
}