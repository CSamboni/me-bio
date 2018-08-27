import React, {Component} from 'react';
/*Componentes */
import Header from './Components/Header';
import Career from './Components/Career';
/*Estilos */
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Career/>
                </div>
            </div>
        );
    }
}

export default App;
