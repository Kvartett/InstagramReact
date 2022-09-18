import Sugges from "./Sugges";
import User from "./User";


export default function SideBar() {
    return (
        <div className="sidebar">
            <User/>
            <Sugges/>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}