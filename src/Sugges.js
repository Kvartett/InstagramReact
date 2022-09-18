function Seggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.nick}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
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
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestion.map((f, i) => <Seggestion key={i} nick={f.nick} image={f.image}/>)}
        </div>
    )
}