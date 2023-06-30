import logo from '../images/logo.svg';

export default function Header(){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="liensHeader">
            <a className="lien1">Accueil</a>
            <a className="lien2">A Propos</a>
            </div>
        </header>
        
    );
}