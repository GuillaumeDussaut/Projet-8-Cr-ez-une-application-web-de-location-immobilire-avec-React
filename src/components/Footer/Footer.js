import logoFooter from '../images/logoFooter.svg';

export default function Footer(){
    return (
        <footer className="App-footer">
            <div className="blocFooter">
                <img src={logoFooter} className="App-logo-footer" alt="logo-footer" />
                <div className="liensHeader">
                <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}