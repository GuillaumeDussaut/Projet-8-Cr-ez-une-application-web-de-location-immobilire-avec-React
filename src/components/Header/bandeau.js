import background from '../images/background1.png';

export default function bandeau(){
    return (
        <div className="App-bandeau">
            <img src={background} className="App-logo" alt="logo" />
            <p>Chez vous, partout ailleurs</p>
        </div>
        
    );
}