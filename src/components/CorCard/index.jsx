import './style.scss'

export function CorCard(props) {

    return (

        <div style={{backgroundColor: props.corInfo.hexa}} className="cor-card">
            <div className="card-body">
                <span>{props.corInfo.nome}</span>
                <h1>{props.corInfo.hexa}</h1>
            </div>
        </div>

    )

}