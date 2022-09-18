function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.image} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.feed} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.like} />
                    <div class="texto">
                        Curtido por <strong>{props.friend}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        { user: "meowed", image: "../img/meowed.svg", feed: "../img/gato-telefone.svg", like: "../img/respondeai.svg", friend: "respondeai" },
        { user: "meowed", image: "../img/meowed.svg", feed: "../img/gato-telefone.svg", like: "../img/adorable_animals.svg", friend: "adorable_animals" }
    ]

    return (
        <div class="posts">
            {posts.map((f, i) => <Post key={i} user={f.user} image={f.image} feed={f.feed} like={f.like} friend={f.friend}/>)}
        </div>
    )
}