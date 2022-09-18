function Storie(props) {
    console.log(props);
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image}/>
            </div>
            <div className="usuario">
                {props.user}
            </div> 
        </div>
    )
}

export default function Stories() {
    const storie = [
        { user: "9gag", image: "../img/9gag.svg" },
        { user: "meowed", image: "../img/meowed.svg" },
        { user: "barked", image: "../img/barked.svg" },
        { user: "nathanwpylestrangeplanet", image: "../img/nathanwpylestrangeplanet.svg" },
        { user: "wawawicomics", image: "../img/wawawicomics.svg" },
        { user: "respondeai", image: "../img/respondeai.svg" },
        { user: "filomoderna", image: "../img/filomoderna.svg" },
        { user: "memeriagourmet", image: "../img/memeriagourmet.svg" }
    ]

    return (
        <div className="stories">
            {storie.map((f, i) => <Storie key={i} user={f.user} image={f.image}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}