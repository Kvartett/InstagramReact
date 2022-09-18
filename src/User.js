import React from "react"

export default function User() {
    const defaultImage = "../img/catanacomics.svg"
    
    const [name, setName] = React.useState("Catana")
    const [nick, setNick] = React.useState("catanacomics")
    const [image, setImage] = React.useState(defaultImage)

    function changeName() {
        const namePrompt = prompt("Qual o seu nome?")
        setName(namePrompt)
        const nickPrompt = prompt("Qual seu nome de USUARIO?")
        setNick(nickPrompt)
    }

    function changeImage() {
        const imagePrompt = prompt("Insira sua foto de usuario aqui!")
        setImage(imagePrompt)
    }

    return (
        <div class="usuario">
            <img onClick={changeImage} src={image}/>
            <div class="texto">
                <strong>{nick}</strong>
                <span>
                    {name}
                    <ion-icon onClick={changeName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}