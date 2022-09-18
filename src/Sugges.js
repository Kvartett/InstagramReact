function Seggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} />
                <div className="texto">
                    <div className="nome">{props.nick}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}


export default function Sugges() {
    const suggestion = [
        { nick: "bad.vibes.memes", image: "../img/bad.vibes.memes.svg" },
        { nick: "chibirdart", image: "../img/chibirdart.svg" },
        { nick: "razoesparaacreditar", image: "../img/razoesparaacreditar.svg" },
        { nick: "adorable_animals", image: "../img/adorable_animals.svg" },
        { nick: "smallcutecats", image: "../img/smallcutecats.svg" }
    ]

    return(
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestion.map((f, i) => <Seggestion key={i} nick={f.nick} image={f.image}/>)}
        </div>
    )
}