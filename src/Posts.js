import react from "react"
import React from "react"

function Post(props) {
    const [likes, setLikes] = React.useState(false)
    const [save, setSave] = React.useState(false)
    const [contLikes, setContLikes] = React.useState(props.likes)

    function like(isLiked) {
        setLikes(isLiked)

        if (isLiked === true) {
            setContLikes(contLikes + 1)
        } else {
            setContLikes(contLikes - 1)
        }
    }

    function savePost(isSaved) {
        setSave(isSaved);
    }

    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.image} />
                    {props.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.feed} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {likes ? <ion-icon onClick={() => like(false)} class="like" name="heart-sharp"></ion-icon> : <ion-icon onClick={() => like(true)} name="heart-outline"></ion-icon>}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {save ? <ion-icon onClick={() => savePost(false)} name="bookmark-sharp"></ion-icon> : <ion-icon onClick={() => savePost(true)} name="bookmark-outline"></ion-icon>}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.like} />
                    <div className="texto">
                        Curtido por <strong>{props.friend}</strong> e <strong>outras {contLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    const posts = [
        { user: "meowed", image: "../img/meowed.svg", feed: "../img/gato-telefone.svg", like: "../img/respondeai.svg", friend: "respondeai", likes: 101523 },
        { user: "meowed", image: "../img/meowed.svg", feed: "../img/gato-telefone.svg", like: "../img/adorable_animals.svg", friend: "adorable_animals", likes: 99159 }
    ]

    return (
        <div className="posts">
            {posts.map((f, i) => <Post key={i} user={f.user} image={f.image} feed={f.feed} like={f.like} friend={f.friend} likes={f.likes}/>)}
        </div>
    )
}